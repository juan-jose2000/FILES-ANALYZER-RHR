

export const Pagination = ({pagination, count, handleChange}) => {

    

    const CreatePaginationOptions = () => {
        const options = [];
        const maxIndex = Math.ceil(pagination / 10);
        for (let i = 1; i <= maxIndex; i++) {
            const isSelected = pagination === i * 10;
            options.push(<option selected={isSelected} value={i * 10}>{i * 10}</option>)
        }
        return options;
    }

    return (
        <div className="pagination">
            <p>Total de elementos: {count}</p>
            <select
                className="input-form"
                onChange={handleChange}
            >
                <CreatePaginationOptions />
            </select>
        </div>
    )

}