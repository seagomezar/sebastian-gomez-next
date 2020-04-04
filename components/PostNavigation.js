import React from "react";
import Link from "next/link";


class PostNavigation extends React.Component {

    render() {
        const {currentPage = 0, totalPages} = this.props;
        return <div className="">
                    <div className="">
                    <Link href={"/page/"+ parseInt(currentPage+1)} >
                        <a className="">
                        Artículos Anteriores
                        </a>
                    </Link>
                    </div>
                    <div className="">
                    página 1 de {totalPages}
                    </div>
                </div>
    }
}

export default PostNavigation;
