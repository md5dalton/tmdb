export default ({ children, className, ...props }) => (
    <section className={`text-black bg-no-repeat py-4 ${className ? className : ""}`} {...props}>
        {children}
    </section>
)