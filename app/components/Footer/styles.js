import { css } from "glamor";
import { Colors, Metrics } from "../../theme";



const styles = css({
    "& .main-container": {
        padding: Metrics.small,
        background: Colors.backgroundColor
    },
    "& .footer": {
        "color": Colors.orange
    }
});
export default styles;