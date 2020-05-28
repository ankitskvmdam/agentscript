import World from './World.js'

// class World defines the coordinate system for the model.
// It will be upgraded with methods converting from other
// transforms like GIS and DataSets.

export default class GeoWorld extends World {
    // static defaultOptions(maxX = 16, maxY = maxX) {
    //     return {
    //         minX: -maxX,
    //         maxX: maxX,
    //         minY: -maxY,
    //         maxY: maxY,
    //     }
    // }
    // static defaultWorld(maxX = 16, maxY = maxX) {
    //     return new World(World.defaultOptions(maxX, maxY))
    // }

    // ======================

    // Use the geojson object's bbox & width to create a World object
    // bbox: [west, south, east, north]
    constructor(bbox, width) {
        const [west, south, east, north] = bbox
        const aspect = (east - west) / (north - south)
        super({
            minX: 0,
            minY: 0,
            maxX: width,
            maxY: Math.round(width / aspect),
        })
        this.bbox = bbox
        this.xfm = this.bboxTransform(...bbox)
    }
    // Convert to/from geo coords.
    toGeo(x, y) {
        return this.xfm.toBBox([x, y])
    }
    toWorld(geoX, geoY) {
        return this.xfm.toWorld([geoX, geoY])
    }
    // Return center [x,y] of bbox in geo coords.
    bboxCenter() {
        const [west, south, east, north] = this.bbox
        return [(west + east) / 2, (south + north) / 2]
    }
    // Return geo coords of bbox corners, from topLeft, clockwise.
    bboxCoords() {
        const [west, south, east, north] = this.bbox
        return [
            [west, north],
            [east, north],
            [east, south],
            [west, south],
        ]
    }
}
