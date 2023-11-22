import "./FooterItem.css"

function FooterItem({ item }) {
    console.log(item.children.map(child => child.LinkText));
    return (
        <div>
            <div className="name">
                <div className="border_name">{item.name}</div>
            </div>
            <div className="footer_childrens">
                {item.children.map((child, index) => (<div key={index}><li>{child.LinkText}</li></div>))}
            </div>
        </div >
    )
}

export default FooterItem;