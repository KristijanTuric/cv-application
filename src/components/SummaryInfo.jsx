function SummaryInfo({summary, className}) {
    return (
        <div className={className} >{summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec neque euismod, consectetur diam ut, rhoncus metus. Sed finibus efficitur quam, non consectetur sapien tincidunt at. Nullam non suscipit risus. Phasellus suscipit dignissim aliquet. Vivamus augue arcu, sodales at nulla facilisis, mattis dignissim massa. Nam sollicitudin congue mi, quis ultrices leo cursus non. In tempor dui leo. Ut consectetur id quam sed vestibulum. "}</div>
    );
}

export default SummaryInfo;