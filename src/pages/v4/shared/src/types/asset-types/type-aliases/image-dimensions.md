[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ImageDimensions

```ts
type ImageDimensions = object;
```

Represents the dimensions of an image.
It takes the size of the image in pixels along with the aspect ratio.

## Properties

### size?

```ts
optional size: PixelSize;
```

The size of the image in pixels.
If provided, it should conform to the exact aspectRatio value within a tolerance of 0.05.
Maximum width and height values are as follows:

- square: 2048x2048
- portrait: 1792x2304
- landscape: 2304x1792
- widescreen: 2688x1536

<HorizontalLine />

### aspectRatio

```ts
aspectRatio: AspectRatio | number;
```

The aspect ratio of the image.
It can be either square, portrait, landscape, widescreen OR a number representing the aspect ratio value.
If aspect ratio is provided as a number, it would be bucketed into one of the aspect ratios as below:

- square: 0.9 - 1.1
- portrait: 0.68 - 0.88
- landscape: 1.18 - 1.38
- widescreen: 1.65 - 1.85
If the number does not fall within the above ranges, then an error will be thrown if the size is provided, else predefined aspect ratio will be ignored.

Below are the exact aspect ratio values for each type:

- square: 1
- portrait: 0.78
- landscape: 1.28
- widescreen: 1.75
