import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { useCallback, useEffect, useState } from 'react';

import projects from '../../projects.json';

const Project = ({ briefing, description, id, images, media }) => {
  const [imagesPaths, setImagesPaths] = useState([]);
  const [imageIdx, setImageIdx] = useState(1);

  useEffect(() => {
    const prefix = `/images/${id}`;
    const suffix = '.jpeg';

    const paths = new Array(images + 1)
      .fill(`${prefix}/presentation${suffix}`)
      .map((img, idx) => {
        if (idx > 0) {
          return {
            src: `${prefix}/image-${idx}${suffix}`,
            active: idx + 1 === imageIdx,
          };
        }

        return {
          src: img,
          active: idx + 1 === imageIdx,
        };
      });

    setImagesPaths(paths);
  }, [id, images, imageIdx]);

  const handlePrevImage = useCallback(() => {
    if (imageIdx > 1) {
      setImageIdx(imageIdx - 1);
    } else {
      setImageIdx(images + 1);
    }
  }, [images, imageIdx]);

  const handleNextImage = useCallback(() => {
    if (imageIdx < images + 1) {
      setImageIdx(imageIdx + 1);
    } else {
      setImageIdx(1);
    }
  }, [images, imageIdx]);

  return (
    <div className="project-page">
      <Navbar />

      <div className="project-wrapper">
        <div className="carousel">
          <div className="carousel-viewport">
            <button className="prev" onClick={handlePrevImage}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  stroke="none"
                  d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"
                />
              </svg>
            </button>
            <div className="images-wrapper">
              <div className="images">
                {imagesPaths.map((image) => (
                  <img
                    alt={image.src}
                    src={image.src}
                    key={image.src}
                    className={image.active ? 'active' : ''}
                  />
                ))}
              </div>
            </div>
            <button className="next" onClick={handleNextImage}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  stroke="none"
                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="info">
          <p>{description}</p>
          <p>{briefing}</p>
          <a
            className="insta-post"
            href={media}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Post do Instagram" src="/images/instagram.png" />
            <p>Ver Post</p>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(projects).map((id) => ({ params: { id } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const project = projects[id];

  return { props: project };
}

export default Project;
