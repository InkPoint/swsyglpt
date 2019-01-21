

// Defines an icon for creating new connections in the connection handler.
// This will automatically disable the highlighting of the source vertex.
mxConnectionHandler.prototype.connectImage = new mxImage(connector, 16, 16);

// Creates a wrapper editor around a new graph inside
// the given container using an XML config for the
// keyboard bindings
var config, editor, graph, model;
// Program starts here. Creates a sample graph in the
// DOM node with the specified ID. This function is invoked
// from the onLoad event handler of the document (see below).
function main(container)
{
    // Checks if browser is supported
    if (!mxClient.isBrowserSupported())
    {
        // Displays an error message if the browser is
        // not supported.
        mxUtils.error('Browser is not supported!', 200, false);
    }
    else
    {
        // Enables crisp rendering of swimlanes in SVG
        mxSwimlane.prototype.crisp = true;
        // Creates a wrapper editor around a new graph inside
        // the given container using an XML config for the
        // keyboard bindings
        config = mxUtils.load(handler).
                getDocumentElement();
        editor = new mxEditor(config);
        editor.setGraphContainer(container);
        graph = editor.graph;
        model = graph.getModel();

        // Auto-resizes the container
        graph.border = 80;
        graph.getView().translate = new mxPoint(graph.border/2, graph.border/2);
        graph.setResizeContainer(true);
        graph.graphHandler.setRemoveCellsFromParent(false);

        // Changes the default vertex style in-place
        var style = graph.getStylesheet().getDefaultVertexStyle();
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_SWIMLANE;
        style[mxConstants.STYLE_FILLCOLOR] = '#f9e67a';
        style[mxConstants.STYLE_VERTICAL_ALIGN] = 'top';
        style[mxConstants.STYLE_FONTSIZE] = 11;
        style[mxConstants.STYLE_STARTSIZE] = 22;
        style[mxConstants.STYLE_HORIZONTAL] = false;
        style[mxConstants.STYLE_FONTCOLOR] = 'black';
        style[mxConstants.STYLE_STROKECOLOR] = 'black'
        style[mxConstants.STYLE_SHADOW] = true;


        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
        style[mxConstants.STYLE_FILLCOLOR] = '#aac4ed';
        style[mxConstants.STYLE_FONTSIZE] = 10;
        style[mxConstants.STYLE_ROUNDED] = true;
        style[mxConstants.STYLE_HORIZONTAL] = true;
        style[mxConstants.STYLE_GRADIENTCOLOR] = 'white';;
        style[mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';

        graph.getStylesheet().putCellStyle('process', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_ELLIPSE;
        style[mxConstants.STYLE_PERIMETER] = mxPerimeter.EllipsePerimeter;
        style[mxConstants.STYLE_FILLCOLOR] = 'green';

        graph.getStylesheet().putCellStyle('state', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_DOUBLE_ELLIPSE;
        style[mxConstants.STYLE_PERIMETER] = mxPerimeter.EllipsePerimeter;
        style[mxConstants.STYLE_SPACING_TOP] = 28;
        style[mxConstants.STYLE_FONTSIZE] = 14;
        style[mxConstants.STYLE_FONTSTYLE] = 1;
        delete style[mxConstants.STYLE_SPACING_RIGHT];
        style[mxConstants.STYLE_FILLCOLOR] = '#cecece';
        graph.getStylesheet().putCellStyle('end', style);

        style = graph.getStylesheet().getDefaultEdgeStyle();
        style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_BLOCK;
        style[mxConstants.STYLE_ROUNDED] = true;
        style[mxConstants.STYLE_FONTCOLOR] = 'black';
        style[mxConstants.STYLE_STROKECOLOR] = 'black';

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_DASHED] = true;
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_OPEN;
        style[mxConstants.STYLE_STARTARROW] = mxConstants.ARROW_OVAL;
        graph.getStylesheet().putCellStyle('crossover', style);

        // Installs double click on middle control point and
        // changes style of edges between empty and this value
        graph.alternateEdgeStyle = 'elbow=vertical';

        // Adds automatic layout and various switches if the
        // graph is enabled
        if (graph.isEnabled())
        {
            // Allows new connections but no dangling edges
            graph.setConnectable(true);
            graph.setAllowDanglingEdges(false);

            // End-states are no valid sources
            var previousIsValidSource = graph.isValidSource;

            graph.isValidSource = function(cell)
            {
                if (previousIsValidSource.apply(this, arguments))
                {
                    var style = this.getModel().getStyle(cell);

                    return style == null ||
                            !(style == 'end' ||
                                    style.indexOf('end') == 0);
                }

                return false;
            };

            // Start-states are no valid targets, we do not
            // perform a call to the superclass function because
            // this would call isValidSource
            // Note: All states are start states in
            // the example below, so we use the state
            // style below
            graph.isValidTarget = function(cell)
            {
                var style = this.getModel().getStyle(cell);

                return !this.getModel().isEdge(cell) &&
                        !this.isSwimlane(cell) &&
                        (style == null ||
                                !(style == 'state' ||
                                        style.indexOf('state') == 0));
            };

            // Allows dropping cells into new lanes and
            // lanes into new pools, but disallows dropping
            // cells on edges to split edges
            graph.setDropEnabled(true);
            graph.setSplitEnabled(false);

            // Returns true for valid drop operations
            graph.isValidDropTarget = function(target, cells, evt)
            {
                if (this.isSplitEnabled() &&
                        this.isSplitTarget(target, cells, evt))
                {
                    return true;
                }

                var model = this.getModel();
                var lane = false;
                var pool = false;
                var cell = false;

                // Checks if any lanes or pools are selected
                for (var i = 0; i < cells.length; i++)
                {
                    var tmp = model.getParent(cells[i]);
                    lane = lane || this.isPool(tmp);
                    pool = pool || this.isPool(cells[i]);

                    cell = cell || !(lane || pool);
                }

                return !pool &&
                        cell != lane &&
                        ((lane && this.isPool(target)) ||
                                (cell && this.isPool(model.getParent(target))));
            };

            // Adds new method for identifying a pool
            graph.isPool = function(cell)
            {
                var model = this.getModel();
                var parent = model.getParent(cell);

                return parent != null &&
                        model.getParent(parent) == model.getRoot();
            };

            // Changes swimlane orientation while collapsed
            graph.model.getStyle = function(cell)
            {
                var style = mxGraphModel.prototype.getStyle.apply(this, arguments);

                if (graph.isCellCollapsed(cell))
                {
                    if (style != null)
                    {
                        style += ';';
                    }
                    else
                    {
                        style = '';
                    }

                    style += 'horizontal=1;align=left;spacingLeft=14;';
                }

                return style;
            };

            // Keeps widths on collapse/expand
            var foldingHandler = function(sender, evt)
            {
                var cells = evt.getProperty('cells');

                for (var i = 0; i < cells.length; i++)
                {
                    var geo = graph.model.getGeometry(cells[i]);

                    if (geo.alternateBounds != null)
                    {
                        geo.width = geo.alternateBounds.width;
                    }
                }
            };

            graph.addListener(mxEvent.FOLD_CELLS, foldingHandler);
        }

        // Applies size changes to siblings and parents
        new mxSwimlaneManager(graph);

        // Creates a stack depending on the orientation of the swimlane
        var layout = new mxStackLayout(graph, false);

        // Makes sure all children fit into the parent swimlane
        layout.resizeParent = true;

        // Applies the size to children if parent size changes
        layout.fill = true;

        // Only update the size of swimlanes
        layout.isVertexIgnored = function(vertex)
        {
            return !graph.isSwimlane(vertex);
        }

        // Keeps the lanes and pools stacked
        var layoutMgr = new mxLayoutManager(graph);

        layoutMgr.getLayout = function(cell)
        {
            if (!model.isEdge(cell) && graph.getModel().getChildCount(cell) > 0 &&
                    (model.getParent(cell) == model.getRoot() || graph.isPool(cell)))
            {
                layout.fill = graph.isPool(cell);

                return layout;
            }

            return null;
        };

        // Gets the default parent for inserting new cells. This
        // is normally the first child of the root (ie. layer 0).
        var parent = graph.getDefaultParent();

        // Adds cells to the model in a single step
        model.beginUpdate();
        try
        {
            var pool1 = graph.insertVertex(parent, '1', '项目管理', 0, 0, 640, 0);
            pool1.setConnectable(false);

            var lane1m = graph.insertVertex(pool1, '11', '型号管理', 0, 0, 640, 110);
            lane1m.setConnectable(false);

            var pool2 = graph.insertVertex(parent, '2', '设计管理', 0, 0, 640, 0);
            pool1.setConnectable(false);

            var lane1a = graph.insertVertex(pool2, '21', '方案设计', 0, 0, 640, 110);
            lane1a.setConnectable(false);

            var lane1b = graph.insertVertex(pool2, '22', '指标设计', 0, 0, 640, 110);
            lane1b.setConnectable(false);

            var pool3 = graph.insertVertex(parent, '3', '方案验证优化', 0, 0, 640, 0);
            pool2.setConnectable(false);

            var lane2a = graph.insertVertex(pool3, '31', '多学科验证', 0, 0, 640, 140);
            lane2a.setConnectable(false);

            var lane2b = graph.insertVertex(pool3, '32', '方案优化', 0, 0, 640, 110);
            lane2b.setConnectable(false);

            var start1 = graph.insertVertex(lane1m, null, null, 40, 40, 30, 30, 'state');

            var step1 = graph.insertVertex(lane1m, '101', '项目管理', 80, 30, 80, 50, 'process');
            var step11 = graph.insertVertex(lane1m, '102', '需求分析', 260, 30, 80, 50, 'process');

            var step2 = graph.insertVertex(lane1a, '201', '总体评估', 80, 30, 80, 50, 'process');
            var step21 = graph.insertVertex(lane1a, '202', '总体参数', 260, 30, 80, 50, 'process');
            var step211 = graph.insertVertex(lane1a, '203', '总体设计', 440, 30, 80, 50, 'process');
            var end2 = graph.insertVertex(lane1a, null, 'A', 560, 40, 30, 30, 'end');


            var step3 = graph.insertVertex(lane1b, '301', '总体系统指标', 80, 30, 80, 50, 'process');
            var step31 = graph.insertVertex(lane1b, '302', '气动系统指标', 170, 30, 80, 50, 'process');

            var step311 = graph.insertVertex(lane1b, '303', '结构系统指标', 260, 30, 80, 50, 'process');
            var step3111 = graph.insertVertex(lane1b, '304', '推进系统指标', 350, 30, 80, 50, 'process');

            var step31111 = graph.insertVertex(lane1b, '305', '效能系统指标', 440, 30, 80, 50, 'process');
            var end3 = graph.insertVertex(lane1b, null, 'B', 560, 40, 30, 30, 'end');

            var step4 = graph.insertVertex(lane2a, '401', '总体指标验证', 80, 30, 80, 50, 'process');
            var step41 = graph.insertVertex(lane2a, '402', '气动指标验证', 170, 30, 80, 50, 'process');

            var step411 = graph.insertVertex(lane2a, '403', '结构指标验证', 260, 30, 80, 50, 'process');
            var step4111 = graph.insertVertex(lane2a, '404', '推进指标验证', 350, 30, 80, 50, 'process');

            var step41111 = graph.insertVertex(lane2a, '405', '效能指标验证', 440, 30, 80, 50, 'process');
            var end4 = graph.insertVertex(lane2a, null, 'C', 560, 40, 30, 30, 'end');

            var step5 = graph.insertVertex(lane2b, '501', '优化参数梳理', 80, 30, 80, 50, 'process');
            var step51 = graph.insertVertex(lane2b, '502', '优化流程设计', 170, 30, 80, 50, 'process');

            var step511 = graph.insertVertex(lane2b, '503', '优化计算', 260, 30, 80, 50, 'process');
            var step5111 = graph.insertVertex(lane2b, '504', '方案比较', 350, 30, 80, 50, 'process');

            var step51111 = graph.insertVertex(lane2b, '505', '方案确定', 440, 30, 80, 50, 'process');

            var end5 = graph.insertVertex(lane2b, null, 'D', 560, 40, 30, 30, 'end');

            var e = null;

            graph.insertEdge(lane1m, null, null, start1, step1);
            graph.insertEdge(lane1m, null, null, step1, step11);

            graph.insertEdge(lane1m, null, null, step11, step2, 'crossover');

            graph.insertEdge(lane1a, null, null, step2, step21);
            graph.insertEdge(lane1a, null, null, step21, step211);
            graph.insertEdge(lane1a, null, null, step211, end2, 'crossover');

            graph.insertEdge(lane1a, null, null, lane1a, step3, 'crossover');
            graph.insertEdge(lane1a, null, null, lane1a, step31, 'crossover');
            graph.insertEdge(lane1a, null, null, lane1a, step311, 'crossover');
            graph.insertEdge(lane1a, null, null, lane1a, step3111, 'crossover');
            graph.insertEdge(lane1a, null, null, lane1a, step31111, 'crossover');

            graph.insertEdge(lane1b, null, null, step3, step31);
            graph.insertEdge(lane1b, null, null, step31, step311);
            graph.insertEdge(lane1b, null, null, step311, step3111);
            graph.insertEdge(lane1b, null, null, step3111, step31111);
            graph.insertEdge(lane1b, null, null, step31111, end3, 'crossover');

            graph.insertEdge(lane1b, null, null, step3, step4, 'crossover');
            graph.insertEdge(lane1b, null, null, step31, step41, 'crossover');
            graph.insertEdge(lane1b, null, null, step311, step411, 'crossover');
            graph.insertEdge(lane1b, null, null, step3111, step4111, 'crossover');
            graph.insertEdge(lane1b, null, null, step31111, step41111, 'crossover');

            graph.insertEdge(lane2a, null, null, step4, step41);
            graph.insertEdge(lane2a, null, null, step41, step411);
            graph.insertEdge(lane2a, null, null, step411, step4111);
            graph.insertEdge(lane2a, null, null, step4111, step41111);
            graph.insertEdge(lane2a, null, null, step41111, end4, 'crossover');

            graph.insertEdge(lane2b, null, null, step5, step51);
            graph.insertEdge(lane2b, null, null, step51, step511);
            graph.insertEdge(lane2b, null, null, step511, step5111);
            graph.insertEdge(lane2b, null, null, step5111, step51111);
            graph.insertEdge(lane2b, null, null, step51111, end5, 'crossover');

            graph.insertEdge(lane2a, null, null, lane2a, step5, 'crossover');
            graph.insertEdge(lane2a, null, null, lane2a, step51, 'crossover');
            graph.insertEdge(lane2a, null, null, lane2a, step511, 'crossover');
            graph.insertEdge(lane2a, null, null, lane2a, step5111, 'crossover');
            graph.insertEdge(lane2a, null, null, lane2a, step51111, 'crossover');


        }
        finally
        {
            // Updates the display
            model.endUpdate();
        }
    }
};

function updatedo()
{
    try{
        model.beginUpdate();
        var c1 = model.getCell("101");
        var c2 = model.getCell("102");

        var c3 = model.getCell("201");
        var c4 = model.getCell("202");
        graph.setCellStyles(mxConstants.STYLE_FILLCOLOR, '#2DFF2C', [c1,c2,c3,c4]);

    }
    finally
    {
        model.endUpdate();
    }
};

function updatestop()
{
    try{
        model.beginUpdate();
        var c1 = model.getCell("101");
        var c2 = model.getCell("102");

        var c3 = model.getCell("201");
        var c4 = model.getCell("202");
        graph.setCellStyles(mxConstants.STYLE_FILLCOLOR, '#2DFF2C', [c1,c2,c3,c4]);

        var cc1 = model.getCell("301");
        graph.setCellStyles(mxConstants.STYLE_FILLCOLOR, 'red', [cc1]);
    }
    finally
    {
        model.endUpdate();
    }
};
function updatewt()
{
    try{
        model.beginUpdate();
        var c1 = model.getCell("101");
        var c2 = model.getCell("102");

        var c3 = model.getCell("201");
        var c4 = model.getCell("202");
        var c5 = model.getCell("203");
        graph.setCellStyles(mxConstants.STYLE_FILLCOLOR, '#2DFF2C', [c1,c2,c3,c4.c5]);

        var ccc1 = model.getCell("302");
        var ccc2 = model.getCell("401");
        graph.setCellStyles(mxConstants.STYLE_FILLCOLOR, 'blue', [ccc1,ccc2]);
    }
    finally
    {
        model.endUpdate();
    }
};