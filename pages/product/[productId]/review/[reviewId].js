import {useRouter} from "next/router"

function ProductDetail() {
   // 이 훅이 라우터 오브젝트를 리턴하며, 쿼리파라미터에 접근 가능하다
	const router = useRouter()

	// 이 쿼리 오브젝트가 파일 이름에 할당된 다이나믹 세그먼트에 맞게 된다
    const {reviewId, productId} = router.query
	return <h1>{productId} 번째 상품 {reviewId} 번째 리뷰 </h1>
}
export default ProductDetail