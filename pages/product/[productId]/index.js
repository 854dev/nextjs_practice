import {useRouter} from "next/router"

function ProductDetail() {
   // 이 훅이 라우터 오브젝트를 리턴하며, 쿼리파라미터에 접근 가능하다
	const router = useRouter()

	// 이 쿼리 오브젝트가 파일 이름에 할당된 다이나믹 세그먼트에 맞게 된다
  const productid = router.query.productid
	return <h1>{productid} 번째 상품</h1>
}
export default ProductDetail