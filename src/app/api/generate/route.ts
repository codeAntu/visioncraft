import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Extract the 'query' parameter from the request URL
  const generate = req.nextUrl.searchParams.get('query');

  console.log("Search query:", generate);

    // random number generator 1 to 6 and return the imgs 

  // const images = [
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  // ];


  const images = [
    "imgs/1.jpeg",
    "imgs/2.jpeg",
    "imgs/3.jpeg",
    "imgs/4.jpeg",
    "imgs/5.jpeg",
    "imgs/6.jpeg",
  ]

  // select any 4 images from the array

  const randomImages = images.sort(() => Math.random() - Math.random()).slice(0, 4);


  return NextResponse.json(randomImages);

}
