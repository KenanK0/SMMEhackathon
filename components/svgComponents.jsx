import * as React from "react";
import {Path,Svg} from "react-native-svg";

const NetworkIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.89 11.016c1.313.009 1.737-.363 1.901-.604.609-.797-.345-2.324-2.58-3.483.867-1.64 1.47-3.11 1.774-4.165.165-.578.053-.928.022-.989-.084.514-.774 2.367-2.354 4.886-1.22-.548-2.76-.982-4.578-1.162-.437-.828-1.703-3.119-2.953-4.343C12.299.348 11.642.052 11.127.01h-.002c-.675-.075-1.107.286-1.338.537-.84.905-1.188 2.387-1.22 4.105-.354-.603-.839-1.202-1.392-1.266h-.009c-1.009-.17-1.875 1.427-1.758 3.97-1.873.067-3.467.28-4.54.548-.484.12-.793.355-.868.474.049-.018 1.094-.45 5.447-.45.255 2.588 1.453 4.972 1.27 4.55-.475.752-1.867 3.045-2.31 4.771-.287 1.117-.214 1.836.007 2.302.272.622.801.816 1.133.891 1.22.28 2.704-.177 4.233-1.032-.367.627-.678 1.392-.442 1.921.357.96 2.172.911 4.318-.461.986 1.57 1.957 2.829 2.72 3.619.125.135.27.251.427.346.251.157.42.165.42.165-.403-.33-1.661-1.856-3.054-4.482 1.084-.781 2.229-1.898 3.294-3.382 5.997.224 6.996-1.21 7.226-1.545.717-.97.168-2.805-2.798-4.575Zm-3.8 5.187c1.162-1.842 1.48-3.31 1.437-4.509 1.36.858 2.304 1.835 2.396 2.873.056.631-.396 1.422-3.834 1.636Zm-7.513 2.727c.476-.305.953-.641 1.425-1 .327.65.664 1.274 1.006 1.864-1.982 1.067-3.361.623-2.431-.864Zm10.498-8.367a21.537 21.537 0 0 0-1.581-.735c.388-.59.758-1.19 1.11-1.802 1.907 1.177 2.241 2.597.47 2.537Zm-7.457 8.87a39.148 39.148 0 0 1-.806-1.78c2.112.063 3.048-.914 3.09-.996 0 .004-1.22.764-3.053.598a35.1 35.1 0 0 0 4.153-4.101c.425-.499.83-1.005 1.217-1.52-.017-.013-.075-.146-.806-.585-2.524 2.943-4.997 4.785-6.482 5.66-1.005-.546-1.994-1.552-2.72-3.002-.977-1.95-1.465-4.023-1.542-5.668.601.044 1.234.106 1.897.19-1.088 1.796-.702 3.076-.657 3.136 0-.004-.047-1.425.983-2.909a33.95 33.95 0 0 0 2.181 7.463c.046-.019.09.043.912-.403-1.286-3.636-1.649-6.746-1.66-8.468.976-.607 2.352-.967 3.986-.87 2.176.13 4.216.745 5.68 1.5-.349.51-.729 1.038-1.14 1.585-1.012-1.842-2.307-2.142-2.386-2.135.006 0 1.265.687 2.028 2.306a35.04 35.04 0 0 0-5.632-1.548 31.562 31.562 0 0 0-1.924-.296c-.003.022-.088.09-.105.993 3.802.707 6.672 1.948 8.166 2.793.036 1.15-.34 2.52-1.241 3.886-1.201 1.822-2.754 3.282-4.14 4.171ZM14.956 5.42c-2.176-.08-3.593.363-4.624 1.01.098-2.554 1.04-3.73 1.866-3.676.825-.207 2.68 2.547 2.758 2.666Zm-6.38.152c.024.591.078 1.202.157 1.82a36.008 36.008 0 0 0-2.07-.061c-.004.158-.006-2.49 1.204-2.422h.005c.28.053.519.336.704.663Zm-1.37 7.91c1.014 1.938 2.114 2.957 3.186 3.53-2.285 1.21-3.786.977-4.146.22-.01-.01-.544-.746.96-3.75Z"
      fill={props.color}
    />
  </Svg>
);

export { NetworkIcon };
