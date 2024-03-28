import React from "react"

export const OllamaIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      fillRule="evenodd"
      viewBox="0 0 646 854"
      ref={ref}
      {...props}>
      <path d="M140.629.24c-7.969 1.287-17.532 5.456-24.275 10.605-20.413 15.51-36.229 48.428-42.91 89.438-2.514 15.509-4.23 37.026-4.23 53.455 0 19.371 2.268 44.136 5.517 61.239.736 3.801 1.103 7.173.797 7.418-.245.245-3.25 2.697-6.62 5.394-11.525 9.195-24.705 23.356-33.778 36.291-17.41 24.704-28.688 52.78-33.409 83.185-1.839 12.015-2.33 36.29-.858 48.305 3.25 27.708 11.586 51.125 25.87 72.581l4.658 6.927-1.349 2.268c-9.563 16.061-17.716 39.294-21.516 61.607-3.004 17.655-3.372 22.375-3.372 46.037 0 23.847.307 28.567 3.127 45.057 3.371 19.739 10.237 40.642 17.9 54.558 2.513 4.536 8.643 13.976 9.378 14.467.246.122-.49 2.39-1.655 5.026-8.827 19.31-16.367 44.995-19.493 66.635-2.207 14.834-2.514 19.616-2.514 35.248 0 19.922 1.104 29.608 5.272 45.485l.613 2.329h52.535l-1.716-3.249c-10.605-19.616-11.586-56.029-2.452-92.38 4.168-16.797 8.888-29.118 17.716-46.099l5.272-10.298v-6.314c0-5.885-.123-6.559-2.023-10.421-1.472-2.943-3.433-5.456-6.927-8.889-5.947-5.762-10.238-11.831-13.67-19.31-15.08-32.735-18.023-81.346-7.418-122.786 4.414-17.287 11.709-32.673 19.371-41.071 5.21-5.763 7.908-12.199 7.908-18.881 0-6.927-2.452-12.628-7.97-18.574-15.815-16.919-25.562-37.517-29.056-61.485-4.965-34.145 4.046-71.355 24.52-100.84 20.046-28.935 48.183-47.509 79.631-52.474 7.049-1.165 20.229-.981 27.585.368 8.031 1.41 13.057.98 18.207-1.472 6.375-3.003 9.563-6.743 13.302-15.325 3.31-7.662 5.885-11.831 12.812-20.474 8.337-10.36 16.367-17.41 29.24-25.931 14.713-9.624 31.448-16.612 48.122-19.984 6.068-1.226 8.888-1.41 20.229-1.41s14.161.184 20.229 1.41c24.459 4.966 48.735 17.594 68.106 35.493 4.168 3.862 14.16 16.245 17.348 21.395 1.226 2.022 3.372 6.314 4.72 9.501 3.739 8.582 6.927 12.322 13.302 15.325 4.966 2.391 10.176 2.882 17.9 1.594 12.199-2.084 21.578-1.9 33.532.552 40.704 8.214 76.136 41.746 91.829 86.68 13.67 39.416 9.808 80.672-10.544 112.18-3.433 5.334-6.866 9.625-11.831 14.897-10.728 11.463-10.728 25.685-.061 37.455 17.532 19.187 28.505 66.389 25.194 108.012-2.206 27.463-9.256 52.045-18.942 65.96-1.716 2.452-5.271 6.62-7.969 9.195-3.494 3.433-5.455 5.946-6.927 8.889-1.9 3.862-2.023 4.536-2.023 10.421v6.314l5.272 10.298c8.828 16.981 13.548 29.302 17.716 46.099 9.012 35.861 8.215 71.538-2.084 91.829-.858 1.716-1.594 3.31-1.594 3.494 0 .184 11.709.306 26.053.306h25.992l.674-2.636c.368-1.409.981-3.555 1.287-4.781.675-2.697 2.023-10.666 3.127-18.329 1.042-7.724 1.042-36.168 0-44.75-3.923-31.141-10.483-55.845-21.21-79.201-1.165-2.636-1.901-4.904-1.656-5.026.307-.184 2.023-2.636 3.862-5.395 13.364-20.229 21.578-45.669 25.747-79.262 1.103-9.257 1.103-49.041 0-57.93-2.943-22.926-6.498-38.497-12.383-54.251-2.452-6.559-8.95-20.413-11.708-24.888l-1.349-2.268 4.659-6.927c14.283-21.456 22.62-44.873 25.869-72.581 1.471-12.015.981-36.29-.858-48.305-4.782-30.467-16-58.42-33.409-83.185-9.073-12.935-22.253-27.096-33.777-36.291-3.372-2.697-6.376-5.149-6.621-5.394-.306-.245.062-3.617.797-7.418 7.418-38.681 7.172-86.924-.613-124.625-6.743-32.857-19.003-58.971-34.819-74.051C523.209 4.286 510.336-.864 494.888.117c-35.432 2.085-63.998 42.85-75.278 107.093-1.839 10.36-3.432 22.498-3.432 25.808 0 1.287-.246 2.329-.552 2.329-.307 0-2.697-1.226-5.272-2.758-27.34-16.184-57.746-24.827-87.354-24.827-29.608 0-60.014 8.643-87.354 24.827-2.575 1.532-4.965 2.758-5.272 2.758-.306 0-.552-1.042-.552-2.329 0-3.433-1.655-15.938-3.432-25.808-10.238-57.684-33.716-95.875-64.918-105.499C157.181.424 144.982-.434 140.629.24zm10.422 49.899c8.827 6.988 18.635 26.972 24.275 49.347 1.042 4.046 2.145 8.705 2.452 10.421.245 1.656.919 5.395 1.471 8.276 2.391 12.996 3.494 27.034 3.617 44.137l.061 16.858-4.23 6.252-4.229 6.314h-9.87c-11.524 0-22.988 1.472-33.961 4.414-3.923.981-7.724 1.962-8.459 2.146-1.165.245-1.349-.123-2.023-5.15-3.617-27.279-3.433-57.5.552-82.634 4.413-28.014 14.712-53.393 24.765-60.871 2.391-1.778 2.82-1.717 5.579.49zm349.538-.43c6.069 4.476 12.751 16.368 17.716 31.57 9.992 30.406 12.812 72.152 7.54 111.875-.674 5.027-.858 5.395-2.023 5.15-.735-.184-4.536-1.165-8.459-2.146-10.973-2.942-22.437-4.414-33.961-4.414h-9.87l-4.229-6.314-4.23-6.252.061-16.858c.123-23.785 2.33-42.359 7.601-63.018 5.579-22.19 15.448-42.175 24.214-49.163 2.759-2.207 3.188-2.268 5.64-.43z"></path>
      <path d="M313.498 358.237c-13.303 1.288-16.919 1.778-23.295 3.066-10.36 2.145-24.214 6.927-33.838 11.647-33.47 16.367-56.519 43.646-63.569 75.216-1.41 6.253-1.594 8.337-1.594 18.881 0 10.421.184 12.689 1.533 18.635 9.379 41.256 47.385 71.723 96.549 77.301 10.666 1.165 56.765 1.165 67.431 0 39.478-4.475 73.439-25.869 88.703-55.907 4.045-8.03 6.007-13.241 7.846-21.394 1.349-5.946 1.533-8.214 1.533-18.635 0-10.544-.184-12.628-1.594-18.881-10.238-45.853-54.742-81.959-109.3-88.825-7.111-.858-25.746-1.594-30.405-1.104zm22.926 33.348c18.207 1.962 36.536 8.46 51.248 18.268 7.908 5.272 19.065 16.306 23.846 23.54 5.885 8.949 9.256 18.083 10.789 29.179.674 5.088.307 8.95-1.533 17.164-2.881 12.26-11.831 25.072-23.907 34.022-5.64 4.107-17.348 10.054-24.52 12.383-13.609 4.352-22.498 5.149-54.252 4.904-20.719-.184-24.398-.368-30.344-1.471-20.29-3.801-36.351-11.893-47.998-24.214-9.441-9.931-13.732-19.003-16.061-33.654-1.042-6.805.919-18.084 4.904-27.586 4.843-11.586 17.348-25.991 29.731-34.267 14.344-9.563 33.225-16.367 50.573-18.206 6.682-.736 20.842-.736 27.524-.062z"></path>
      <path d="M299.584 436.336c-4.659 2.513-7.908 8.888-6.927 13.608 1.103 5.088 5.578 10.238 12.566 14.468 3.74 2.268 3.985 2.574 4.169 4.842.122 1.349-.368 5.211-1.042 8.644-.736 3.371-1.288 6.927-1.288 7.908.062 2.636 2.514 6.927 5.088 9.011 2.269 1.839 2.698 1.9 9.073 2.084 5.824.184 7.05.061 9.379-1.042 6.008-2.943 7.54-8.337 5.333-18.697-1.839-8.643-1.471-9.992 3.127-12.628 4.842-2.82 9.992-7.785 11.524-11.157 2.943-6.436.245-13.731-6.253-17.103-1.593-.797-3.555-1.164-6.436-1.164-4.475 0-7.356 1.042-12.628 4.413l-3.004 1.901-1.9-1.165c-7.785-4.598-9.195-5.149-13.916-5.088-3.371 0-5.21.306-6.865 1.165zM150.744 365.165c-10.85 3.433-18.942 11.402-23.11 22.743-2.023 5.395-3.004 13.916-2.146 18.513 2.023 10.973 11.034 20.965 21.272 23.724 12.873 3.371 22.497 1.164 31.018-7.295 4.965-4.843 7.663-9.073 10.36-15.939 1.961-4.842 2.084-5.7 2.084-12.566l.061-7.356-2.574-5.272c-4.108-8.337-11.525-14.529-20.107-16.797-4.843-1.226-12.628-1.164-16.858.245zM478.153 364.982c-8.398 2.268-15.877 8.52-19.862 16.735l-2.574 5.272.061 7.356c0 6.866.123 7.724 2.084 12.566 2.698 6.866 5.395 11.096 10.36 15.939 8.521 8.459 18.145 10.666 31.019 7.295 7.417-1.962 14.834-8.215 18.39-15.51 3.065-6.191 3.8-10.666 2.82-17.716-2.268-16.122-11.709-27.83-25.747-31.937-4.107-1.226-12.076-1.226-16.551 0z"></path>
    </svg>
  )
})
