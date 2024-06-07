import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  salmao: '#E66767',
  bege: '#FFEBD9',
  branco: '#FFFFFF',
  amarelo: '#FFB930',
  fundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.fundo};
    padding-top: 80px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
