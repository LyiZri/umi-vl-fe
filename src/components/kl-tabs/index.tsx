
import { colors } from "@/lib/config";
import { styled, Tab, Tabs } from "@mui/material";


interface KlTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}


const KlTabs = styled((props: KlTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan hover:text-white" /> }}
    />
))(({ }) => ({
    color: colors["sec-stress"],
    width: "100%",
    padding: "0px 50px 0px 50px",
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',

    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 60,
        width: '100%',
        backgroundColor: colors["yellow-6"],
    },
    '& .Mui-selected': {
        lineHeight: "32px",
        color: colors["yellow-6"] + " !important"
    },
})
);

interface KlTabProps {
    label: string;
    value: number
}


const KlTab = styled((props: KlTabProps) => (
    <Tab disableRipple {...props} />
))(({ }) => ({
    textTransform: 'none',
    width: "33%",
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
    ":hover": {
        color: "#fff"
    },
}));
export { KlTabs, KlTab }