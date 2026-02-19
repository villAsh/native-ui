import { Button } from "@/components/ui/button";
import {
    Dropdown,
    DropdownContent,
    DropdownGroup,
    DropdownItem,
    DropdownLabel,
    DropdownSeparator,
    DropdownTrigger,
} from "@/components/ui/dropdown";
import { User, Settings, HelpCircle } from "lucide-react-native";

export default function DropdownExample() {
    const [basicOpen, setBasicOpen] = React.useState(false);

    return (
        <Dropdown open={basicOpen} onOpenChange={setBasicOpen}>
            <DropdownTrigger asChild>
                <Button variant="outline">
                    <Text className="text-foreground">Open Menu</Text>
                </Button>
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem icon={<User size={20} color="#6B7280" />} onSelect={() => console.log("Profile")}>
                    Profile
                </DropdownItem>
                <DropdownItem icon={<Settings size={20} color="#6B7280" />} onSelect={() => console.log("Settings")}>
                    Settings
                </DropdownItem>
                <DropdownItem icon={<HelpCircle size={20} color="#6B7280" />} onSelect={() => console.log("Help")}>
                    Help Center
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    );
}
