import { useNavigate } from 'react-router-dom'

import ProductImg from '../../mock/assets/product.png'

import {
  ButtonBuy,
  Container,
  ContentImgProduct,
  ContentPrince,
  Discount,
  HeaderCardProduct,
  ImageProduct,
  Price,
  PriceComparison,
  ProductName,
  TextDiscount,
} from './styles'

interface CardProductProps {
  productId: string
}

export function CardProduct({ productId }: CardProductProps) {
  const navigate = useNavigate()
  return (
    <Container>
      <HeaderCardProduct>
        <div />
        <Discount>
          <TextDiscount>-20%</TextDiscount>
        </Discount>
      </HeaderCardProduct>
      <ContentImgProduct>
        <ImageProduct src={ProductImg} />
      </ContentImgProduct>
      <ProductName>
        Mascara com Elastico Azul Claro com 50 unidades - SP Protection
      </ProductName>
      <ContentPrince>
        <Price>R$ 2.999,00</Price>
        <PriceComparison>R$ 3.999,90</PriceComparison>
      </ContentPrince>
      <ButtonBuy
        label="Comprar"
        onClick={() => navigate(`/product-details/${productId}`)}
      />
    </Container>
  )
}
