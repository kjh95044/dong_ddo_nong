import { useRef, useEffect } from "react";

const Home = () => {
  const content1Ref = useRef();
  const path1Ref = useRef();
  const path1LengthRef = useRef();

  const calcDashoffset = (scrollY, element, length) => {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - length * ratio;

    return value > 0 ? 0 : value > length ? length : value;
  };
  const scrollHandler = () => {
    const scrollY = window.scrollY + window.innerHeight * 0.25;
    path1Ref.current.style.strokeDashoffset = calcDashoffset(
      scrollY,
      content1Ref.current,
      path1LengthRef.current
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    const path1Element = path1Ref.current;

    if (path1Element) path1LengthRef.current = path1Element.getTotalLength();

    path1Ref.current.style.strokeDasharray = path1LengthRef.current;
    path1Ref.current.style.strokeDashoffset = calcDashoffset(
      window.innerHeight * 0.8,
      content1Ref.current,
      path1LengthRef.current
    );
  }, []);

  return (
    <div className="content1 h-80" ref={content1Ref}>
      <svg
        className="fill-none stroke-black stroke-miterlimit-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 760.85 733.44"
      >
        <path
          className="path1"
          ref={path1Ref}
          d="m.49,723.54c2.77-11.75,6.41-28.19,10-48,4.26-23.53,8.02-44.25,10-72,1.87-26.16,2.8-39.24,2-55-.55-10.76-1.54-18.97,1-31,.56-2.63,3.48-15.81,13-31,7.26-11.59,14.63-18.37,24-27,21-19.35,40.77-29.8,45-32,19.23-9.99,19.95-6.32,30-14,11.35-8.67,22.68-22.7,31-33,5.59-6.92,11.28-14.51,20-15,3.89-.22,4.64,1.57,9,2,7.36.72,13.13-3.18,25-12,14.86-11.03,22.28-16.55,25-19,8.44-7.62,12.55-12.74,21-15,6.99-1.87,11.77-.41,13,0,3.19,1.06,3.93,3.2,8,5,3.77,1.67,6.95,1.83,9,2,7.48.62,6.93,1.97,22,5,2.95.59,10.34,1.74,25,4,4.15.64,7.86.46,13,2,3.82,1.15,4.37,1.86,7,2,4.15.22,6.4-1.36,10,0,1.15.44,2.33.88,3,2,2.14,3.59-3.33,10.21-4,11-5.51,6.54-13.37,8.26-17,9-3.49.72-2.67.05-25-2-4.62-.42-8.89-.78-12-4-.49-.5-3.01-3.21-3-7,0-1.7.51-4.65,2-5,1.45-.34,3.37,1.9,4,4,.61,2.03.16,4.38-1,6-2.48,3.48-8.01,3.32-16,3-8.57-.35-16-2-16-2-6.88-1.53-7.82-2.61-11-2-4.79.91-8.38,4.43-11,7-2.68,2.62-3.29,4-5,6-5.11,5.99-11.92,8.11-18,10-11.01,3.43-19.84,2.31-22,2-4.64-.67-13-2.6-13-5,0-2.17,6.88-3.79,12-5,4.24-1,11.52-2.43,30-3,8.45-.26,13.62-.42,21,0,9.3.53,8.84,1.22,14,1,7.91-.34,11.87-2.09,18,0,2.47.84,4.35,1.99,6,3,5.31,3.24,5.33,4.98,10,8,4.44,2.87,5.32,1.89,10,5,3.64,2.42,4.14,3.71,7,6,5.41,4.34,9.26,4.26,16,7,4.38,1.78,8.25,4.52,16,10,14.43,10.21,13.59,15.97,23,19,4.31,1.38,7.61,1.29,9,4,1.73,3.36-.59,8.88-4,12-9.89,9.04-30.75-.42-32-1-9.52-4.44-16-11-16-11-4.86-4.92-6.45-8.62-12-11-4.19-1.8-5.07-.46-11-2-5.59-1.45-6.44-3.06-16-8-7.98-4.12-11.97-6.18-17-7-6.64-1.08-11.86.25-15,1-7.14,1.69,7.72-2.31-43,6,0,0-20.4,3.34-40,3-1.32-.02-7.37-.2-13-4-1.72-1.16-3.18-2.14-3-3,.61-2.96,20.11-1.61,33,0,14.49,1.81,14.35,3.16,34,6,15.1,2.18,22.66,3.27,27,3,9.49-.6,15.23-2.78,21,1,3.24,2.12,5.11,5.22,8,10,3.37,5.58,4.73,9.77,6,13,1.54,3.9,6.38,10.99,16,25,7.85,11.43,11.82,17.19,14,19,6.67,5.55,12.3,6.98,13,12,.74,5.32-4.74,9.79-5,10-7.59,6.03-20.46,2.32-28-3-3.95-2.79-4.94-5.03-10-12-6.77-9.33-12.52-15.55-24-28-13.9-15.06-18.22-17.37-23-18-3.1-.41-2.22.43-14,2-8.87,1.18-14.92,1.12-27,1-6.08-.06-9.8-.28-12-3-1.75-2.17-2.39-5.76-1-7,1.59-1.43,5.97.14,8,3,2.75,3.87,1.13,9.99-2,12-1.24.8-1.99.47-7,1-3.93.41-5.11.79-7,1-7.71.87-16.84-2.08-22-8-1.04-1.19-2.52-2.89-2-4,1-2.1,8.67-.74,14,1,5.25,1.71,7.36,3.5,12,6,3.2,1.73,9.47,3.82,22,8,11.2,3.74,16.86,5.61,20,6,5.98.74,8.25.08,12,2,4.39,2.26,4.94,5.05,10,12,2.03,2.78,8.53,11.61,18,19,6.51,5.09,8.13,4.59,10,8,3.29,6.03-.92,9.13,1,19,1.7,8.76,6.12,11.97,4,17-1.31,3.11-4.13,4.55-5,5-6.24,3.2-15.28.4-19-5-1.38-2-.77-2.53-3-17-.91-5.88-1.33-7.94-3-10-2.34-2.9-5.12-3.35-10-5-7.11-2.41-16.56-5.61-22-13-1.31-1.78-4.2-5.82-3-10,.78-2.73,3.28-5.4,5-5,2.15.5,3.49,5.88,2,10-1.67,4.61-6.82,7.45-11,7-2.27-.24-2.39-1.25-6-3-6.62-3.21-12.91-3.07-15-3-1.12.04-1.59.12-10,2-13.06,2.92-13.44,3.07-15,3-7.38-.34-12.74-4.32-15-6-2.93-2.18-7.83-6.61-7-8,.89-1.51,8.72.1,14,5,1.14,1.06,6.72,6.5,6,14-.34,3.55-2.2,8.71-6,10-1.59.54-2.94.2-4,0-3.76-.71-7.84.2-16,2-11.09,2.45-16.64,3.68-20,7-3.43,3.39-1.48,4.29-8,16-4.56,8.18-7.34,11.02-11,12-2.5.67-4.64.26-6,0-5.82-1.11-9.41-5.07-12-8-3.93-4.46-8.42-11.68-7-13,1.34-1.24,8.66,2.01,12,8,4.11,7.36,1.27,17.16-1,25-1.15,3.97-1.34,3.26-2,6-2.29,9.46.28,16.47,2,25,1.52,7.54,1.32,15.33,2,23,1.99,22.5,2.98,33.75,3,34,1.32,20.5.6,36.53,0,49-1.03,21.48-1.55,32.23-2.89,35.1-.05.11-.25.51-.11.9.8,2.17,10.85-.02,19-1,4-.48,11.33-.32,26,0,20.46.45,30.69.67,32,1,3.84.96,8.93,2.61,13,0,2.88-1.85,3.5-4.7,5-8,3.33-7.34,7.6-9.4,14-16,8.4-8.66,6.33-10.55,17-25,1.87-2.54,4.09-5.4,20-23,12.42-13.74,18.63-20.61,21-23,26.15-26.36,41.24-32.78,45.4-38.21.25-.33,1.15-1.55,2.6-1.79,2.39-.39,4.86,2.19,6,4,2.95,4.66,1.83,11.6,0,12-1.72.37-5.19-4.77-6-10-1.46-9.41,5.97-17.57,10-22,3.58-3.94,5.52-6.06,9-7,7.25-1.95,14,3.19,19,7,3.45,2.62,8.76,6.68,8,11-.26,1.5-1.31,3.34-3,4-5.08,1.98-13.78-7.64-18-14-2.09-3.14-9.38-14.47-8-30,1.41-15.8,10.96-26.57,14-30,5.05-5.69,8.34-7,17-17,4.5-5.19,6.79-7.87,9-12,5.08-9.5,2.63-12.89,7-20,2.78-4.53,4.11-3.69,15-13,10.01-8.55,15.01-12.83,17-17,4.49-9.42,1.51-17.15,8-22,2.44-1.82,3.11-.92,6-3,4.49-3.23,5.55-7.33,9-16,6.29-15.79,9.05-17.94,11-19,.59-.32,5.49-2.89,10-1,6.17,2.58,7.32,11.68,8,17,1.43,11.24-.05,30.53-10,34-3.73,1.3-8.67.4-12-2-2.44-1.76-4.74-4.85-4-6,.83-1.3,5.85-.62,9,2,5.43,4.52,6.11,15.51,2,23-3.1,5.66-6.7,5.24-11,13-1.89,3.41-3.93,7.09-3,11,1.16,4.87,6.02,6.19,11,10,8.44,6.45,13.23,17.01,14,25,1.45,15.08-10.91,27.02-14,30,0,0-5.32,5.14-34,18-1.43-.47-3.16-1.34-4-3-2.54-5.03,5.19-13.16,6-14,6.62-6.83,15.53-9.4,28-13,5.42-1.56,7.63-1.87,11-4,2.57-1.63,9.11-5.5,11-13,1.36-5.39-.31-10.06-1-12-1.98-5.53-4.47-5.91-8-13-2.65-5.32-4.12-8.27-3-11,1.74-4.25,8.53-4.98,18-6,8.21-.89,10.79.31,12,1,4.21,2.4,7.14,7.5,6,9-1.1,1.45-6.68.36-9-3-2.72-3.94-.69-10.61,3-14,7.09-6.51,20.63-1.3,24,0,3.71,1.43,6.86,3.44,7.43,3.8,2.66,1.71,5.1,3.69,7.57,6.2,6.87,6.96,14.62,18.54,13,20-1.55,1.39-10.98-7.09-12-8-5.65-5.08-8.83-7.94-10-13-.18-.78-1.57-7.22,2-13,2.71-4.4,5.83-4.41,17-10,9.9-4.96,9.76-6.1,20-11,9.41-4.5,9.23-3.39,14-6,11.14-6.1,12.15-12.16,23-22,12.58-11.4,23.62-14.49,23-16-.75-1.83-15.93,4.96-37,8-24.72,3.56-52.9,1.29-54-5-.58-3.32,6.58-6.57,14-11,17.43-10.4,27.29-22.27,47-46,23.94-28.82,35.34-63.74,44-91,24.06-75.73,23.67-141.92,23-142-.32-.04-1.45,15.46-7,46-2.72,14.97-6.65,36.32-14,63-5.68,20.63-10.56,38.34-20,60-12.38,28.43-26.35,49.69-37,64-16.7,22.43-28.81,32.42-32,35-16.16,13.06-22.82,21.05-32,20-2.62-.3-2.89-.92-16-6-10.16-3.93-15.83-5.82-19-7-6.49-2.42-14-6.19-46-30-25.19-18.74-32.14-25.03-31-32,.39-2.4,1.51-3.45,5-8,9.56-12.47,10.78-17.12,17-26,5.54-7.92,14.1-15.72,31-31,7.74-7,18.94-17.09,35-30,16.67-13.4,18.55-13.73,36-28,14.24-11.65,12.65-11.15,25-21,15.39-12.28,19.4-14.29,28-23,2.3-2.33,9.57-9.85,17-21,5.95-8.94,8.46-14.87,10-20,1.74-5.77,2.92-12.71,2-13-1.06-.34-4.14,8.44-8,16-3.1,6.07-8.55,15-33,37-4.3,3.87-15.02,13.39-35,29-12.45,9.73-14.92,11.2-40,30-31.11,23.31-36.38,27.82-41,32-14.08,12.71-21.16,19.1-29,30-14.92,20.74-19.08,38.98-25,38-2.45-.4-2.85-3.7-8-14-5-10-8.52-14.68-11-19-11.55-20.1-13.58-54.83-14-62-1.71-29.17-2.56-43.75,5-59,9.4-18.96,25.23-28.5,41-38,18.87-11.37,34.69-15.46,60-22,33.54-8.67,59.58-10.62,65-11,38.66-2.7,66.89,2.12,67,1,.09-.92-19.07-4.4-41-6-15.52-1.13-42.55-2.94-77,3-23.61,4.07-41.1,7.08-61,18-33.34,18.29-47.44,44.51-51,42-3.49-2.46,9.62-28,22-47,8.86-13.59,20-30.41,40-47,5.19-4.3,17.79-11.87,43-27,12.04-7.23,17.18-10.04,25-11,5.56-.68,10.58-.2,33,6,17.65,4.88,26.48,7.32,30,9,7.23,3.45,24.37,11.64,34,29,7.55,13.6,7.35,27.19,9,27,1.2-.14,1.76-7.41,1-14-1.84-16.02-11.3-27.04-14-30-9.82-10.76-21.05-14.67-43-22-20.77-6.94-32.14-7.82-32-10,.23-3.63,32-4.2,49-4,34.73.41,52.33.84,64,12,7.14,6.83,9.79,14.62,15,30,8.59,25.35,7.2,44.02,9,44,1.66-.02,5.73-15.98,2-34-4.42-21.37-17.57-34.84-15-37,1.37-1.15,5.6,2.26,13,7,13.72,8.79,17.09,7.42,26,14,5.8,4.28,3.57,3.94,13,12,12.23,10.46,20.03,14.5,19,18-.57,1.92-3.05,1.16-7,4-6.47,4.66-8.12,12.72-9,17-1.33,6.51-.88,12.88,0,13,.84.11,1.74-5.53,6-15,2.65-5.89,4.09-7.67,6-9,.45-.32,5.46-3.7,10-2,3.76,1.41,4.87,5.44,7,10,4.32,9.25,7.39,9.06,14,19,4.73,7.12,6.82,12.74,11,24,5.9,15.89,10.7,34.37,9,35-.99.36-3.06-5.72-9-14-6.29-8.77-12.52-13.87-20-20-5.41-4.43-15.66-12.72-31-20-8.92-4.23-16.61-6.49-32-11-9.37-2.75-17.72-5.16-29-7-13.35-2.17-25.9-2.73-26-2-.09.72,12.14,2.11,32,7,12.34,3.04,21.48,5.29,33,10,8.97,3.67,15.65,7.45,29,15,14.32,8.1,21.48,12.15,27,17,12.73,11.18,19.02,23.03,21,27,5.27,10.57,7.21,19.92,8,25,1.62,10.39.77,17.75-1,32-1.67,13.47-3.42,27.57-10,45-4.19,11.09-8.75,19.32-13,27-3.09,5.57-7.79,14.05-15,24-11.42,15.76-23.45,27.47-24,27-.43-.37,7.07-7.83,14-20,2.68-4.71,10.45-19.22,13-38,1.34-9.85-1.09-24.36-6-53-2.46-14.35-4.45-25.96-8-42-3.83-17.33-4.91-19.16-9-38-4.1-18.88-6.28-32.11-7-32-.59.09.73,9.17,1,26,.11,6.71-.06,8.3,0,12,.19,12.1,2.4,19.88,6,35,2.47,10.39,6.03,25.41,9,42,2.47,13.81,3.71,20.72,4,28,.88,21.73-4.52,38.5-7,46-6.37,19.23-12.8,39.55-31,52-7.83,5.36-20.08,10.81-25,13-11.48,5.11-24.38,9.73-24,11,.24.82,5.51-1.31,12,1,1.8.64,6.71,2.38,8,6,.72,2.02.93,6.39-12,19-10.05,9.81-13.22,10.14-22,18-14.93,13.36-11,17.08-22,24-11.56,7.27-17.55,4.2-26,13-2.61,2.71-5.27,6.37-11,10-1.19.75-9.78,6.19-12,4-1.85-1.82,1.13-8.51,5-13,3.81-4.41,8.12-6.29,12-8,10.46-4.62,19.67-8.68,24-11,9.13-4.89,8.5-8.38,22-22,7.44-7.5,17.69-17.69,33-26,7.65-4.15,19.08-9.2,33-9,10.39.15,13.6,3.1,15,5,2.38,3.23,2.98,8.08,1,12-2.16,4.26-7.49,2.7-15,6-3.63,1.6-5.35,3.15-13,10-23.47,20.99-24.2,21.38-27,25-6.89,8.93-5.2,10.15-11,16-4.41,4.44-10.66,7.69-23,14-5.94,3.04-13.29,7.03-28,15-2.99,1.62-4.99,2.73-7,5-2.35,2.65-2.54,4.44-5,6-1.93,1.22-5.33,2.35-7,1-2.48-2.01-.95-9.38,3-14,2.89-3.38,6.24-4.33,11-6,9.98-3.51,17.66-7.34,33-15,5.85-2.92,8.78-4.38,11-6,7.29-5.31,8.89-9.67,17-21,12.33-17.23,19.82-22.81,23-25,5.94-4.1,9.9-5.4,13-6,2.44-.47,12.91-2.51,20,4,2.81,2.58,6.53,7.83,5,12-1.38,3.77-6.05,3.92-12,7-2.85,1.48-5.21,3.22-16,16-9.69,11.47-14.53,17.21-20,25-7.98,11.37-8.03,13.42-15,22-6.51,8.01-9.76,12.01-15,15-5.4,3.08-5.9,1.46-25,7-12.06,3.5-14.62,4.94-17,7-4.76,4.12-6.14,8.38-9,8-2.84-.38-5.11-5.05-5-9,.02-.6.17-4.28,3-7,3.42-3.29,7.89-2.42,14-3,0,0,8.19-.78,17-5,7.07-3.39,6.26-6.46,22-25,7.03-8.27,11.68-12.95,19-15,2.32-.65,4.99-1.87,8-1,4.28,1.24,7.57,5.68,8,10,.16,1.64.04,4.47-8,15-3.7,4.84-7.25,8.94-10,12-7.79,8.66-10.13,10.1-12,15-2.01,5.29-.29,6.25-2,10-3.09,6.8-10.01,6.37-24,13-11.98,5.68-18.89,8.95-26,16-3.75,3.72-6.88,7.82-10,7-1.11-.29-2.82-1.36-5-9-2.2-7.71-4.35-20.31-2-21,2.06-.61,6.72,8.22,9,15,3.15,9.38,2.43,16.94,2,20-.74,5.21-1.39,9.81-5,13-2.93,2.59-5.56,2.27-12,4-6.62,1.78-9.35,3.61-15,6-15.18,6.43-21.81,4.41-34,9-10.83,4.08-8.95,6.94-27,19-17.9,11.96-29.3,19.57-45,20-15.51.42-26.82-6.4-31-9-2.29-1.42-23.48-14.89-21-28,.59-3.12,2.79-7.69,7-9,3.43-1.07,7.82.15,10,3,2.89,3.77.07,7.99,1,16,.48,4.18,1.05,8.33,4,12,1.81,2.25,5.43,5,10,6,2.78.61,3.61.03,5,1,3,2.1,3.38,7.8,2,12-.43,1.31-1.42,3.67-10,11-4.43,3.78-6.18,4.88-10,8-4.22,3.44-8.34,6.82-12,11-5.72,6.55-4.58,8.56-13,22-2.93,4.69-3,4.32-8,12-4.41,6.76-7.82,12.36-10,16"
        />
      </svg>
    </div>
  );
};

export default Home;
