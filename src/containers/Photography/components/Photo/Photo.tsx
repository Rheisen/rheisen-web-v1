import React from 'react';

import styles from './photo.module.scss';

interface PhotoProps {
  imageName: string,
  alt: string,
}

export const Photo: React.FC<PhotoProps> = (props) => {
  return (
    <picture>
      <img src={require(`common-assets/photos/${props.imageName}.JPG`)} alt={props.alt} />
    </picture>
  );
}
