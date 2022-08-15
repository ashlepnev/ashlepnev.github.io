const breakpoints = [2160, 640];

const unsplashLink = (id, width, height) =>
  `/images/cert/${id}.png`;

const unsplashPhotos = [
    {
      id: "bitrix-framework_big",
      width: 1123,
      height: 766
    },
    {
      id: "sert_1",
      width: 595,
      height: 841
    },
    {
        id: "sert_2",
        width: 595,
        height: 841
      },
      {
        id: "sert_3",
        width: 595,
        height: 841
      },
      {
        id: "sert_4",
        width: 595,
        height: 841
      },
      {
        id: "sert_5",
        width: 595,
        height: 841
      },
      {
        id: "sert_6",
        width: 595,
        height: 841
      },
      {
        id: "sert_7",
        width: 595,
        height: 841
      },
]

const photos = unsplashPhotos.map((photo, index) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
      src: unsplashLink(photo.id, width, height),
      key: `${index}`,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint);
        return {
          src: unsplashLink(photo.id, breakpoint, breakpointHeight),
          width: breakpoint,
          height: breakpointHeight
        };
      })
    };
  });

export default photos