import CollapseFilter from "./CollapseFilter"
import CustomRangeFilter from "./CustomRangeFilter"
import RangeFilters from "./RangeFilters"
import FilterList from "./FilterList"
import useStreamersContext from "../hooks/StreamersContextHook"
import { useSelector } from "react-redux"

const FiltersSidebar = () => {
    const {streamers} = useStreamersContext()
    const { filters } = useSelector(state => state.filter)
    const activeFilters = filters.map(filter => (filter.criterion))
    
    const viewCountOptions = [
        {
            description: "Less than 10",
            min: 0,
            max: 9
        },
        {
            description: "10 to 40",
            min: 10,
            max: 39
        },
        {
            description: "40 to 100",
            min: 40,
            max: 99
        },
        {
            description: "More than 100",
            min: 100,
            max: 9999999
        }
    ]

    const followersOptions = [
        {
            description: "Less than 10",
            min: 0,
            max: 9
        },
        {
            description: "10 to 40",
            min: 10,
            max: 39
        },
        {
            description: "40 to 100",
            min: 40,
            max: 99
        },
        {
            description: "More than 100",
            min: 100,
            max: 9999999
        }
    ]

    const adsQueuedOptions = [
        {
            description: "Less than 10",
            min: 0,
            max: 9
        },
        {
            description: "10 to 40",
            min: 10,
            max: 39
        },
        {
            description: "40 to 100",
            min: 40,
            max: 99
        },
        {
            description: "More than 100",
            min: 100,
            max: 9999999
        }
    ]
    
    return (
        <div className="filter-sidebar">
            <FilterList />
            {!activeFilters.includes('viewers') && <CollapseFilter title="View Count" criterion={"viewers"} component={<><CustomRangeFilter type={"number"} dataset={streamers} criterion={"viewers"} /><RangeFilters options={viewCountOptions} criterion={"viewers"} /></>} />}
            {!activeFilters.includes('followers') && <CollapseFilter title="Followers" criterion={"followers"} component={<><CustomRangeFilter type={"number"} dataset={streamers} criterion={"followers"} /><RangeFilters options={followersOptions} criterion={"followers"} /></>} />}
            {/* adsQueued does not reference the stack length, convert to query then adress problem */}
            {!activeFilters.includes('adsQueued') && <CollapseFilter title="Ads Queued" criterion={"adsQueued"} component={<><CustomRangeFilter type={"number"} dataset={streamers} criterion={"adsQueued"}/><RangeFilters options={adsQueuedOptions} criterion={"adsQueued"} /></>} />}
        </div>
    )
}

export default FiltersSidebar