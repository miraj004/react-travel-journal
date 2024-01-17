import PropTypes from "prop-types";

export function ContainerGrid({children}) {

    return (
        <main className={"max-w-2xl mx-auto gap-5 my-10 md:grid md:grid-cols-1 lg:max-w-5xl lg:grid-cols-2"}>
            {children}
        </main>
    )
}


ContainerGrid.propTypes = {
    children: PropTypes.node
}
