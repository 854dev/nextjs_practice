import { useRouter } from 'next/router'
import React from 'react'

export default function Doc() {
    const router = useRouter()
    // undefined 에러 방지용, params 에 기본값 지정
    const {params = []} = router.query

    console.log(params)
    return (
        <div>
            {params.length === 2 ?           
             <div>
                DOCS HOMEPAGE {params[0]} feature, {params[1]} concepts, 
            </div>
            :
             <div>
                DOCS HOMEPAGE {params[0]} feature
            </div>
            }
        </div>
    )
}
