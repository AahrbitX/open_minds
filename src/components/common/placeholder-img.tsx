import Image from "next/image";
import React from "react";

function PlaceholderImage() {
  return (
    <Image
      src={"/images/placeholder.svg"}
      alt="temp placeholder"
      fill
      className="object-cover rounded-2xl"
    />
  );
}

export default PlaceholderImage;
