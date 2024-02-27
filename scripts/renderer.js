class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        let p0 = {x: 100, y: 350};
        let p3 = {x: 700, y: 350};
        this.drawBezierCurve(p0, {x: 250, y: 550}, {x: 550, y: 550}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 100, y: 350};
        p3 = {x: 700, y: 350};
        this.drawBezierCurve(p0, {x: 250, y: 150}, {x: 550, y: 150}, p3, this.num_curve_sections, [0, 0, 255, 255], framebuffer);

        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
        //this.drawLine({x: 100, y: 100}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let center1 = {x: 250, y: 350};
        let center2 = {x: 400, y: 350};
        this.drawCircle(center1, 150, this.num_curve_sections, [0, 220, 0, 255], framebuffer);
        this.drawCircle(center2, 150, this.num_curve_sections, [0, 0, 220, 255], framebuffer);
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        let vertexList = [
            {x: 100, y: 100},
            {x: 190, y: 160},
            {x: 230, y: 280},
            {x: 150, y: 330},
            {x: 40, y: 280},
            {x: 75, y: 125}
        ];
        this.drawConvexPolygon(vertexList, [135, 170, 225, 255], framebuffer);

        vertexList = [
            {x: 60, y: 500},
            {x: 80, y: 460},
            {x: 150, y: 460},
            {x: 170, y: 500},
            {x: 150, y: 540},
            {x: 80, y: 540}
        ];
        this.drawConvexPolygon(vertexList, [235, 170, 25, 255], framebuffer);

        vertexList = [
            {x: 500, y: 100},
            {x: 650, y: 180},
            {x: 720, y: 360},
            {x: 660, y: 480},
            {x: 540, y: 580},
            {x: 430, y: 490},
            {x: 375, y: 405},
            {x: 400, y: 250}
        ]
        this.drawConvexPolygon(vertexList, [0, 125, 230, 255], framebuffer);

        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)
        //let point_a = {x: 100, y: 100};
        //let point_b = {x: 270, y: 160};
        //let point_c = {x: 280, y: 280};
        //this.drawTriangle(point_a, point_c, point_b, [0, 128, 128, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        // 'c'
        let p0 = {x: 110, y: 100};
        let p3 = {x: 110, y: 400};
        this.drawBezierCurve(p0, {x: 10, y: 120}, {x: 10, y: 350}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        
        // 'h'
        this.drawLine({x: 140, y: 400}, {x: 140, y: 100}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 144, y: 400}, {x: 144, y: 100}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 148, y: 400}, {x: 148, y: 100}, [255, 0, 0, 255], framebuffer);

        p0 = {x: 140, y: 200};
        p3 = {x: 220, y: 100};
        this.drawBezierCurve(p0, {x: 200, y: 320}, {x: 260, y: 250}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 144, y: 204};
        p3 = {x: 224, y: 104};
        this.drawBezierCurve(p0, {x: 204, y: 324}, {x: 264, y: 254}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);

        // 'a'
        let center = {x: 300, y: 150};
        this.drawCircle(center, 60, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 350, y: 185}, {x: 365, y: 90}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 345, y: 195}, {x: 360, y: 90}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 340, y: 200}, {x: 355, y: 90}, [255, 0, 0, 255], framebuffer);
    
        // 'r'
        this.drawLine({x: 375, y: 200}, {x: 375, y: 90}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 390, y: 200}, {x: 390, y: 90}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 375, y: 200}, {x: 390, y: 200}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: 375, y: 90}, {x: 390, y: 90}, [255, 0, 0, 255], framebuffer);
        p0 = {x: 382, y: 120};
        p3 = {x: 440, y: 200};
        this.drawBezierCurve(p0, {x: 386, y: 165}, {x: 400, y: 180}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 375, y: 120};
        p3 = {x: 440, y: 205};
        this.drawBezierCurve(p0, {x: 366, y: 165}, {x: 400, y: 180}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 390, y: 120};
        p3 = {x: 440, y: 190};
        this.drawBezierCurve(p0, {x: 366, y: 155}, {x: 390, y: 180}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);

        // 'l'
        let vertexList = [
            {x: 450, y: 100},
            {x: 460, y: 90},
            {x: 470, y: 100},
            {x: 470, y: 390},
            {x: 460, y: 400},
            {x: 450, y: 390}
        ];
        this.drawConvexPolygon(vertexList, [255, 0, 0, 255], framebuffer);

        this.drawLine({x: 453, y: 400}, {x: 453, y: 90}, [255, 255, 255, 255], framebuffer);
        this.drawLine({x: 458, y: 400}, {x: 458, y: 90}, [255, 255, 255, 255], framebuffer);
        this.drawLine({x: 462, y: 400}, {x: 462, y: 90}, [255, 255, 255, 255], framebuffer);
        this.drawLine({x: 467, y: 400}, {x: 467, y: 90}, [255, 255, 255, 255], framebuffer);
        this.drawLine({x: 450, y: 150}, {x: 470, y: 110}, [255, 255, 255, 255], framebuffer);
        this.drawLine({x: 450, y: 140}, {x: 470, y: 100}, [255, 255, 255, 255], framebuffer);
        this.drawLine({x: 450, y: 130}, {x: 470, y: 90}, [255, 255, 255, 255], framebuffer);

        // 'e'
        vertexList = [
            {x: 490, y: 150},
            {x: 600, y: 150},
            {x: 580, y: 180},
            {x: 550, y: 200},
            {x: 535, y: 200},
            {x: 500, y: 170}
        ];
        this.drawConvexPolygon(vertexList, [255, 0, 0, 255], framebuffer);
        p0 = {x: 490, y: 150};
        p3 = {x: 600, y: 110};
        this.drawBezierCurve(p0, {x: 520, y: 80}, {x: 550, y: 80}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 495, y: 150};
        p3 = {x: 600, y: 115};
        this.drawBezierCurve(p0, {x: 520, y: 85}, {x: 550, y: 85}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 500, y: 150};
        p3 = {x: 600, y: 120};
        this.drawBezierCurve(p0, {x: 520, y: 90}, {x: 550, y: 90}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);

        // 's'
        p0 = {x: 620, y: 90};
        p3 = {x: 660, y: 150};
        this.drawBezierCurve(p0, {x: 730, y: 120}, {x: 730, y: 150}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        p0 = {x: 660, y: 150};
        p3 = {x: 700, y: 210};
        this.drawBezierCurve(p0, {x: 590, y: 180}, {x: 590, y: 180}, p3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        
        let vertices = [];    
        for (let t = 0; t <= 1; t = t + (1 / num_edges)) {
            let x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
            let y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
            vertices.push({ x: Math.round(x), y: Math.round(y) });
        }
    
        for (let i = 0; i < vertices.length - 1; i++) {
            this.drawLine(vertices[i], vertices[i + 1], color, framebuffer);
        }

        if (num_edges == 18 || num_edges == 20 || num_edges == 36) {
            this.drawLine(vertices[vertices.length - 1], p3, color, framebuffer);
        }

        if (this.show_points) {
            this.drawVertex(p0, [200,0,200,255], framebuffer);
            this.drawVertex(p1, [200,0,200,255], framebuffer);
            this.drawVertex(p2, [200,0,200,255], framebuffer);
            this.drawVertex(p3, [200,0,200,255], framebuffer);
            for (let i = 0; i < vertices.length; i++) {
                this.drawVertex(vertices[i], [0,0,0,255], framebuffer);
            }
        }
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let angleIncrement = (2 * Math.PI) / num_edges;
        let angle = 0;
        let vertices = [];
    
        for (let i = 0; i < num_edges; i++) {
            let x = center.x + radius * Math.cos(angle);
            let y = center.y + radius * Math.sin(angle);
            vertices.push({ x: Math.round(x), y: Math.round(y) });
            angle += angleIncrement;
        }
    
        for (let i = 0; i < vertices.length - 1; i++) {
            this.drawLine(vertices[i], vertices[i + 1], color, framebuffer);
        }
        
        this.drawLine(vertices[num_edges - 1], vertices[0], color, framebuffer);

        if (this.show_points) {
            for (let i = 0; i < vertices.length; i++) {
                this.drawVertex(vertices[i], [0,0,0,255], framebuffer);
            }
        }
        
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        for (let i = 1; i < vertex_list.length - 1; i++) {
            this.drawTriangle(vertex_list[0], vertex_list[i], vertex_list[i + 1], color, framebuffer);
        }
        
        if (this.show_points) {
            for (let i = 0; i < vertex_list.length; i++) {
                this.drawVertex(vertex_list[i], [0,0,0,255], framebuffer);
            }
        }
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        
        let angleIncrement = (2 * Math.PI) / 6;
        let angle = 0;
        let vertices = [];
    
        for (let i = 0; i < 6; i++) {
            let x = v.x + 5 * Math.cos(angle);
            let y = v.y + 5 * Math.sin(angle);
            vertices.push({ x: Math.round(x), y: Math.round(y) });
            angle += angleIncrement;
        }
    
        for (let i = 0; i < vertices.length - 1; i++) {
            this.drawLine(vertices[i], vertices[i + 1], color, framebuffer);
        }

        for (let i = 0; i < 6; i++) {
            let x = v.x + 4 * Math.cos(angle);
            let y = v.y + 4 * Math.sin(angle);
            vertices.push({ x: Math.round(x), y: Math.round(y) });
            angle += angleIncrement;
        }
    
        for (let i = 0; i < vertices.length - 1; i++) {
            this.drawLine(vertices[i], vertices[i + 1], color, framebuffer);
        }

        for (let i = 0; i < 6; i++) {
            let x = v.x + 3 * Math.cos(angle);
            let y = v.y + 3 * Math.sin(angle);
            vertices.push({ x: Math.round(x), y: Math.round(y) });
            angle += angleIncrement;
        }
    
        for (let i = 0; i < vertices.length - 1; i++) {
            this.drawLine(vertices[i], vertices[i + 1], color, framebuffer);
        }
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
