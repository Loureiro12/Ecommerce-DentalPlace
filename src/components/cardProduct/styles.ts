import styled from 'styled-components'
import { Button } from '../button'

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 8px 12px;
  border-radius: 10px;
  max-width: 288px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const ButtonBuy = styled(Button)`
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border: 0;
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
`

export const ProductName = styled.h3`
  color: ${(props) => props.theme.blue};
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const ContentPrince = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0px;
`

export const Price = styled.p`
  color: ${(props) => props.theme.black};
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 10px;
`

export const PriceComparison = styled.p`
  color: #888;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const HeaderCardProduct = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const Discount = styled.div`
  background-color: ${(props) => props.theme['red-500']};
  padding: 5px;
  border-radius: 10px;
`

export const TextDiscount = styled.p`
  color: ${(props) => props.theme.white};
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const ContentImgProduct = styled.div`
  display: flex;
  justify-content: center;
  margin: 18px 0px;
`

export const ImageProduct = styled.img`
  max-width: 11.46094rem;
  max-height: 9.625rem;
`
