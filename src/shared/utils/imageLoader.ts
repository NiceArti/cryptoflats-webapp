import { ImageLoaderProps } from "next/image";

export const imageLoader = (p: ImageLoaderProps): string => {
    const {src, width, quality} = p;
    
    return `${src}?w=${width}&q=${quality || 75}`
}