import { gql } from "@apollo/client";

export const GET_IMAGE_ID = gql`
    query($productId: String!) {
        getImageAIdWithProductId(productId: $productId)
    }
`;


export const GET_PRODUCTS_IDS = gql`
    query GetProducsIds {
        getProducsIds {
            id
        }
    }
`
;

export const GET_PRODUCT_NAME_AND_PRICE = gql`
    query GetProductNameAndPriceWithId($productId: ID!) {
        getProductNameAndPriceWithId(productId: $productId) {
            name
            price
        }
    }
`;