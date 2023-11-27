const RootLayer = ({
    children
} : {
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <div className="h-full bg-red-500">
                {children}
            </div>
        </div>
     );
}
 
export default RootLayer;