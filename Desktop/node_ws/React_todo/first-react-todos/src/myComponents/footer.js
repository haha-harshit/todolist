import React from 'react'
// import './component-css/footer.css'
export const Footer = () => {

    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%"
    }

    return (
        <>
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center py-2">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
        </>
    )
}
