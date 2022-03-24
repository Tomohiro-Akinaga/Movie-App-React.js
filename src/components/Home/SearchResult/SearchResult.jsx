import SearchResultStyle from "./SearchResult.module.scss";

export default function SearchResult() {
    return (
        <div className={SearchResultStyle.container}>
            <h2 className={SearchResultStyle.heading}>Search Result</h2>
            <ul className={SearchResultStyle.itemBox}></ul>
        </div>
    );
}
