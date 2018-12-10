import { css } from "glamor";
import { Colors, Metrics } from "../../theme";



const styles = css({
    "& .main-container": Metrics.Grid.Container,
    "& .row": {
        "background": Colors.lightGreen,
        "marginTop": '2px !important',
        "padding": `${Metrics.base} !important`,
        ":hover": {
            "background": Colors.deepGreen,
            "cursor": "pointer"
        }
    },
    '& .active': {
        "background": Colors.deepGreen
    }
});
export default styles;