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
import { 
    User, 
    Settings, 
    HelpCircle, 
    CreditCard, 
    Bell, 
    Lock, 
    Palette, 
    Type, 
    Eye, 
    Share, 
    Copy, 
    Archive, 
    Trash2 
} from "lucide-react-native";

export default function DropdownExample() {
    const [basicOpen, setBasicOpen] = React.useState(false);
    const [profileOpen, setProfileOpen] = React.useState(false);
    const [settingsOpen, setSettingsOpen] = React.useState(false);
    const [moreOpen, setMoreOpen] = React.useState(false);

    const iconColor = "#6B7280";
    const destructiveColor = "#EF4444";

    return (
        <>
            <SafeAreaView className="flex-1 bg-background" edges={["bottom"]}>
                <ScrollView className="flex-1 p-4">
                    <View className="mb-6">
                        <Text className="text-2xl font-bold mb-2 text-foreground">
                            Dropdown
                        </Text>
                        <Text className="text-base text-muted-foreground mb-6">
                            Displays a menu to the user — triggered by a button.
                        </Text>
                    </View>
                    {/* Basic Dropdown */}
                    <View className="mb-8">
                        <Text className="text-xl font-semibold mb-4 text-foreground">
                            Basic Dropdown
                        </Text>
                        <Dropdown open={basicOpen} onOpenChange={setBasicOpen}>
                            <DropdownTrigger asChild>
                                <Button variant="outline">
                                    <Text className="text-foreground">Open Menu</Text>
                                </Button>
                            </DropdownTrigger>
                            <DropdownContent>
                                <DropdownItem icon={<User size={20} color={iconColor} />} onSelect={() => console.log("Profile")}>
                                    Profile
                                </DropdownItem>
                                <DropdownItem icon={<Settings size={20} color={iconColor} />} onSelect={() => console.log("Settings")}>
                                    Settings
                                </DropdownItem>
                                <DropdownItem icon={<HelpCircle size={20} color={iconColor} />} onSelect={() => console.log("Help")}>
                                    Help Center
                                </DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </View>

                    {/* Profile Dropdown */}
                    <View className="mb-8">
                        <Text className="text-xl font-semibold mb-4 text-foreground">
                            Profile Dropdown
                        </Text>
                        <Dropdown open={profileOpen} onOpenChange={setProfileOpen}>
                            <DropdownTrigger asChild>
                                <Button>
                                    <Text className="text-primary-foreground">Account</Text>
                                </Button>
                            </DropdownTrigger>
                            <DropdownContent>
                                <DropdownLabel>My Account</DropdownLabel>
                                <DropdownGroup>
                                    <DropdownItem
                                        icon={<User size={20} color={iconColor} />}
                                        onSelect={() => console.log("Profile")}
                                        shortcut="⌘P"
                                    >
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem
                                        icon={<CreditCard size={20} color={iconColor} />}
                                        onSelect={() => console.log("Billing")}
                                        shortcut="⌘B"
                                    >
                                        Billing
                                    </DropdownItem>
                                    <DropdownItem
                                        icon={<Settings size={20} color={iconColor} />}
                                        onSelect={() => console.log("Settings")}
                                        shortcut="⌘S"
                                    >
                                        Settings
                                    </DropdownItem>
                                </DropdownGroup>
                                <DropdownSeparator />
                                <DropdownGroup>
                                    <DropdownItem
                                        icon={<Bell size={20} color={iconColor} />}
                                        onSelect={() => console.log("Notifications")}
                                    >
                                        Notifications
                                    </DropdownItem>
                                    <DropdownItem
                                        icon={<Lock size={20} color={iconColor} />}
                                        onSelect={() => console.log("Privacy")}
                                    >
                                        Privacy
                                    </DropdownItem>
                                </DropdownGroup>
                            </DropdownContent>
                        </Dropdown>
                    </View>

                    {/* Settings Dropdown */}
                    <View className="mb-8">
                        <Text className="text-xl font-semibold mb-4 text-foreground">
                            Settings Dropdown
                        </Text>
                        <Dropdown open={settingsOpen} onOpenChange={setSettingsOpen}>
                            <DropdownTrigger asChild>
                                <Button variant="outline">
                                    <Text className="text-foreground">Settings</Text>
                                </Button>
                            </DropdownTrigger>
                            <DropdownContent>
                                <DropdownLabel>Appearance</DropdownLabel>
                                <DropdownItem
                                    icon={<Palette size={20} color={iconColor} />}
                                    onSelect={() => console.log("Theme")}
                                >
                                    Theme
                                </DropdownItem>
                                <DropdownItem
                                    icon={<Type size={20} color={iconColor} />}
                                    onSelect={() => console.log("Font Size")}
                                >
                                    Font Size
                                </DropdownItem>
                                <DropdownSeparator />
                                <DropdownLabel>Privacy</DropdownLabel>
                                <DropdownItem
                                    icon={<Eye size={20} color={iconColor} />}
                                    onSelect={() => console.log("Visibility")}
                                >
                                    Visibility
                                </DropdownItem>
                                <DropdownItem
                                    icon={<Bell size={20} color={iconColor} />}
                                    onSelect={() => console.log("Notifications")}
                                >
                                    Notifications
                                </DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </View>

                    {/* More Actions Dropdown */}
                    <View className="mb-8">
                        <Text className="text-xl font-semibold mb-4 text-foreground">
                            More Actions
                        </Text>
                        <Dropdown open={moreOpen} onOpenChange={setMoreOpen}>
                            <DropdownTrigger asChild>
                                <Button variant="outline">
                                    <Text className="text-foreground">More</Text>
                                </Button>
                            </DropdownTrigger>
                            <DropdownContent>
                                <DropdownItem
                                    icon={<Share size={20} color={iconColor} />}
                                    onSelect={() => console.log("Share")}
                                >
                                    Share
                                </DropdownItem>
                                <DropdownItem
                                    icon={<Copy size={20} color={iconColor} />}
                                    onSelect={() => console.log("Duplicate")}
                                >
                                    Duplicate
                                </DropdownItem>
                                <DropdownSeparator />
                                <DropdownItem
                                    icon={<Archive size={20} color={iconColor} />}
                                    onSelect={() => console.log("Archive")}
                                >
                                    Archive
                                </DropdownItem>
                                <DropdownItem
                                    icon={<Trash2 size={20} color={destructiveColor} />}
                                    destructive
                                    onSelect={() => console.log("Delete")}
                                >
                                    Delete
                                </DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </View>

                    <View className="h-20" />
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
