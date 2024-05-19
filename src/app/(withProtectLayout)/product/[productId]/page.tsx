import ProductDetails from "@/components/ui/ProductDetails";
import "react-rater/lib/react-rater.css";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const data = await res.json();
  return data.data.slice(0, 11).map((p: any) => ({
    productId: p._id,
  }));
};

const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const res = await fetch(
    `https://supplies-store-server.vercel.app/api/v1/product/${params.productId}`
  );

  const data = await res.json();
  return (
    <div>
      <ProductDetails productInfo={data} />
    </div>
  );
};

export default ProductDetail;
