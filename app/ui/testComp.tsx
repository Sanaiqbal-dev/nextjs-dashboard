'use client';
import { css } from '@emotion/react';

const TestComp = () => {

    return (
    <p
      css={css`
        color: red;
        border-radius: 10px;
        &:hover {
            color: blue;
            }
      `}
    >
      This is a styled component using Emotion in a Next.js Client Component.
    </p>
  );
}

export default TestComp