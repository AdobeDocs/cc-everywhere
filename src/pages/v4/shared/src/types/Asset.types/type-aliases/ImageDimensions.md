[cc-everywhere](../../../../../index.md) / [shared/src/types/Asset.types](../index.md) / ImageDimensions

# Type Alias: ImageDimensions

```ts
type ImageDimensions: object;
```

Represents the dimensions of an image.
It takes the size of the image in pixels along with the aspect ratio.

## Type declaration

### size

```ts
size: PixelSize;
```

The size of the image in pixels.
Maximum width and height values are as follows:
- square: 2048x2048
- portrait: 1792x2304
- landscape: 2304x1792
- widescreen: 2688x1536

### aspectRatio

```ts
aspectRatio: AspectRatio;
```

The aspect ratio of the image.
The provided size should conform to the following aspect ratio values within a tolerance of 0.01:
- square: 1
- portrait: 0.78
- landscape: 1.28
- widescreen: 1.75
