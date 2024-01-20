// Copy from: https://gitee.com/cocotais/boxy/blob/master/src/theme/codemao.renderer.js
class CustomConstantsProvider extends Blockly.zelos.ConstantProvider {
    constructor() {
        super()

        this.NOTCH_WIDTH = 0
        this.NOTCH_HEIGHT = 8

        this.CORNER_RADIUS = 4

        this.FIELD_TEXT_FONTSIZE = 13
        this.FIELD_TEXT_FONTWEIGHT = '500'

        this.TOP_ROW_MIN_HEIGHT = 2
        this.BOTTOM_ROW_MIN_HEIGHT = 2

        this.SELECTED_GLOW_COLOUR = '#4062f6'
        this.REPLACEMENT_GLOW_COLOUR = '#4062f6'
    }

    /**
     * @override
     */
    makeNotch() {
        const width = 0
        const height = 0

        /**
         * Since previous and next connections share the same shape
         * you can define a function to generate the path for both.
         */
        function makeMainPath(dir) {
            return Blockly.utils.svgPaths.line([
                Blockly.utils.svgPaths.point(0, height),
                Blockly.utils.svgPaths.point(dir * width, 0),
                Blockly.utils.svgPaths.point(0, -height)
            ])
        }

        const pathLeft = makeMainPath(1)
        const pathRight = makeMainPath(-1)

        return {
            width: width,
            height: height + this.NOTCH_HEIGHT,
            pathLeft: pathLeft,
            pathRight: pathRight
        }
    }
}

class CustomRenderer extends Blockly.zelos.Renderer {
    constructor(name) {
        super(name)
    }

    makeConstants_() {
        return new CustomConstantsProvider()
    }
}

Blockly.blockRendering.register('codemao', CustomRenderer)