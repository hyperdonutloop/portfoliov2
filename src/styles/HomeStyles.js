import styled from 'styled-components'

export const Wrapper = styled.div`
  .canvas {
    order: 2;
    flex: 1;
    height: 100%;
    
    outline: 2px dotted orange;
}

main {
  background: #f0f0f0;
  display: flex;
  flex-direction: row;
  outline: 5px double red;

  @media only screen and (max-aspect-ratio: 8/7) {
    main {
      flex-direction: column;
    }
    .canvas {
      order: 1;
    }
  }
}
`;