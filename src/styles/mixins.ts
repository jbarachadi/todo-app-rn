import {Dimensions, PixelRatio} from 'react-native';

//#- types

export type MarginType = 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft';

export type PaddingType = 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft';

export type DimensionType = {
    [Key in MarginType | PaddingType]: number;
}

export interface IOffset {
    height: number;
    width: number;
}

export const defaultOffset = {
    height: 2,
    width: 2
} as IOffset;

export interface IBoxShadow {
    shadowColor: string,
    shadowOffset: IOffset,
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number,
}

//#- mixins

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number): number => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number): number => size * PixelRatio.getFontScale();

const dimensions = (top: number, right: number, bottom: number = top, left: number = right, property: string): DimensionType => {
    return {
        [`${property}Top`]: top,
        [`${property}Right`]: right,
        [`${property}Bottom`]: bottom,
        [`${property}Left`]: left,
    } as DimensionType;
}

export const margin = (top: number, right: number, bottom: number, left: number): DimensionType => {
    return dimensions(top, right, bottom, left, 'margin');
}

export const padding = (top: number, right: number, bottom: number, left: number): DimensionType => {
    return dimensions(top, right, bottom, left, 'padding');
}

export const boxShadow = (color: string, offset: IOffset = defaultOffset, radius: number = 8, opacity: number = 0.2) => {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    } as IBoxShadow;
}
