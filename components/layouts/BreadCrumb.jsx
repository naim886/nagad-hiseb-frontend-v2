import Link from "next/link";

const BreadCrumb = ({ items }) => {
    return (
        <>
            <h1 className="mt-4">{items.title}</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link href={'/'}>Dashboard</Link></li>
                {items.subTitle && items.subTitleLink &&
                    <li className="breadcrumb-item"><Link href={items.subTitleLink}>{items.subTitle}</Link></li>
                }
                <li className="breadcrumb-item active">{items.active}</li>
            </ol>
        </>
    );
};

export default BreadCrumb;