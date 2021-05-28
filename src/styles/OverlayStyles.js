import styled from 'styled-components'

export const Wrapper = styled.div`
  .overlay {
    position: relative;
    order: 1;
    flex: 1;
    pointer-events: none;
}

svg {
  width: 100%;
  height: 100%;
  outline: 2px dashed purple;

  @media only screen and (max-aspect-ratio: 8/7) {
    order: 2;
    width: 100%;
    max-width: 100%;
    height: 60vh;
  }
}
`;