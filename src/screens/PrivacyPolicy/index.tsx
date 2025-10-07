import React from "react";
import {View, Text, ScrollView} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {PrivacyPolicyNavigationProps} from "./interfaces";
import {SafeAreaView} from "react-native-safe-area-context";
import {usePrivacyPolicy} from "./hooks";
import {APP_TITLE, COMPANY_NAME} from "@/config/app";
import {BulletProps} from "./interfaces";

const PrivacyPolicy = () => {
    const Styles = useStyles();
    const GlobalStyle = useGlobalStyles();
    const {_onContactUs} = usePrivacyPolicy();

    const PersonalInfo: Array<BulletProps> = [
        {id: "acc_details", label: "Account details: such as your name, email address, and password."},
        {id: "profile_info", label: "Profile information: such as age, gender, height, weight, and activity preferences (if you choose to provide them)."},
        {id: "meal_fitness", label: "Meal and fitness plans: details you enter into the diet meal planner and exercise planner."},
        {id: "feedback", label: "Feedback and support requests: messages or inquiries you send us."},
    ];
    const ActivityData: Array<BulletProps> = [
        {id: "steps_count", label: "Step counts and walking activity data"},
        {id: "fasting_log", label: "Fasting logs and eating schedules"},
        {id: "exercise", label: "Exercise routines and progress"},
        {id: "dietary", label: "Dietary preferences and meal tracking data"},
    ];
    const DataCollect: Array<BulletProps> = [
        {id: "steps_count", label: "Device information (model, operating system, app version)"},
        {id: "fasting_log", label: "Usage data (features accessed, time spent, crash logs)"},
        {id: "exercise", label: "General location (city or region, not precise GPS)"},
    ];
    const UseOfInfo: Array<BulletProps> = [
        {id: "improve_feature", label: "Provide and improve our app features (fasting tracker, walking tracker, meal and exercise planners)"},
        {id: "personalize", label: "Personalize your experience and recommendations"},
        {id: "track_progress", label: "Track progress and display insights"},
        {id: "customer_support", label: "Respond to feedback and provide customer support"},
        {id: "notif", label: "Send optional notifications or reminders"},
        {id: "legal", label: "Comply with legal obligations or resolve disputes"},
    ];
    const DataSharing: Array<BulletProps> = [
        {id: "service_provider", label: "With service providers that help us operate the App (e.g., analytics, cloud hosting)"},
        {id: "consent", label: "With your consent, if you choose to connect third-party apps such as Google Fit or Apple Health"},
        {id: "by_law", label: "When required by law, to comply with legal requests or prevent harm"},
    ];
    const RightsAndChoices: Array<BulletProps> = [
        {id: "access_download", label: "Access or download your personal data"},
        {id: "delete_data", label: "Correct or delete your data"},
        {id: "withdrawal_consent", label: "Withdraw consent for data processing"},
        {id: "stop_process", label: "Request that we stop processing certain information"},
    ];

    return (
        <SafeAreaView style={Styles.container} edges={['bottom']}>
            <ScrollView style={Styles.scrollView}>
                <Text style={GlobalStyle.lastUpdateLabel}>Last updated: October 7, 2025</Text>

                <Text style={GlobalStyle.intro}>{`This Privacy Policy explains how ${APP_TITLE} (“the App,” “we,” “our,” or “us”) collects, uses, and protects your personal information when you use our mobile application.

By using the App, you agree to this Privacy Policy. If you do not agree, please do not use the App.`}</Text>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Information We Collect</Text>
                        {`\n\nWe collect the following types of information to provide and improve the App’s services:\n`}
                    </Text>

                    <Text style={GlobalStyle.heading}>a. Personal Information You Provide</Text>
                    <View style={GlobalStyle.bulletContainer}>
                        {
                            PersonalInfo.map((as: BulletProps) => (
                                <View key={as.id} style={GlobalStyle.bullets}>
                                    <View style={GlobalStyle.bullet} />
                                    <Text style={GlobalStyle.normalSize}>{as.label}</Text>
                                </View>
                               ))
                        }
                    </View>

                    <Text style={GlobalStyle.heading}>b. Health and Activity Data</Text>
                    <Text style={GlobalStyle.section}>With your consent, the App may collect and process health-related information such as:{`\n`}</Text>
                    <View style={GlobalStyle.bulletContainer}>
                        {
                            ActivityData.map((as: BulletProps) => (
                                <View key={as.id} style={GlobalStyle.bullets}>
                                    <View style={GlobalStyle.bullet} />
                                    <Text style={GlobalStyle.normalSize}>{as.label}</Text>
                                </View>
                               ))
                        }
                    </View>
                    <Text style={GlobalStyle.section}>This data may come from your manual entries or through integrations with third-party fitness platforms (e.g., Google Fit, Apple Health).{`\n`}</Text>

                    <Text style={GlobalStyle.heading}>c. Automatically Collected Data</Text>
                    <Text style={GlobalStyle.section}>When you use the App, we may automatically collect:{`\n`}</Text>
                    <View style={GlobalStyle.bulletContainer}>
                        {
                            DataCollect.map((as: BulletProps) => (
                                <View key={as.id} style={GlobalStyle.bullets}>
                                    <View style={GlobalStyle.bullet} />
                                    <Text style={GlobalStyle.normalSize}>{as.label}</Text>
                                </View>
                               ))
                        }
                    </View>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>How We Use Your Information</Text>
                        {`\n\nWe use the information we collect to:\n`}
                    </Text>
                    <View style={GlobalStyle.bulletContainer}>
                        {
                            UseOfInfo.map((as: BulletProps) => (
                                <View key={as.id} style={GlobalStyle.bullets}>
                                    <View style={GlobalStyle.bullet} />
                                    <Text style={GlobalStyle.normalSize}>{as.label}</Text>
                                </View>
                               ))
                        }
                    </View>
                    <Text style={GlobalStyle.highlight}>We do not sell or rent your personal data to anyone.</Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Data Storage and Security</Text>
                        {`\n\nWe take appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
Your information may be stored on secure cloud servers and transmitted using encryption (e.g., HTTPS).

However, no digital system is completely secure. You use the App at your own risk.\n`}
                    </Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Data Sharing and Third Parties</Text>
                        {`\n\nWe may share limited data only when necessary:\n`}
                    </Text>
                    <View style={GlobalStyle.bulletContainer}>
                        {
                            DataSharing.map((as: BulletProps) => (
                                <View key={as.id} style={GlobalStyle.bullets}>
                                    <View style={GlobalStyle.bullet} />
                                    <Text style={GlobalStyle.normalSize}>{as.label}</Text>
                                </View>
                               ))
                        }
                    </View>
                    <Text style={GlobalStyle.highlight}>We do not share your health data for advertising purposes.</Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Your Rights and Choices</Text>
                        {`\n\nDepending on your region, you may have the right to:\n`}
                    </Text>

                    <View style={GlobalStyle.bulletContainer}>
                        {
                            RightsAndChoices.map((as: BulletProps) => (
                                <View key={as.id} style={GlobalStyle.bullets}>
                                    <View style={GlobalStyle.bullet} />
                                    <Text style={GlobalStyle.normalSize}>{as.label}</Text>
                                </View>
                               ))
                        }
                    </View>

                    <Text style={GlobalStyle.section}>You can exercise these rights by contacting us using our <Text style={GlobalStyle.link} onPress={_onContactUs}>Contact Us form.</Text></Text>

                    <Text style={GlobalStyle.section}>{`\nYou may also delete your account anytime through the App Settings > Manage Account, which will permanently remove your personal and health data from our systems (except where required by law).`}</Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Data Retention</Text>
                        {`\n\nWe retain your data only as long as necessary to provide our services or as required by law.

When you delete your account, we securely erase or anonymize your personal information.\n`}
                    </Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Children’s Privacy</Text>
                        {`\n\nThe App is not intended for children under 13 (or the minimum age allowed in your country).

We do not knowingly collect personal information from children.

If we become aware of such data, we will delete it promptly.\n`}
                    </Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Changes to This Policy</Text>
                        {`\n\nWe may update this Privacy Policy from time to time.
                        
When we make significant changes, we will notify you by updating the “Last updated” date or sending a notice through the App.\n`}
                    </Text>
                </View>

                <View style={GlobalStyle.sectionContainer}>
                    <Text style={GlobalStyle.section}>
                        <Text style={GlobalStyle.title}>Contact Us</Text>
                        {`\n\nIf you have questions or concerns about this Privacy Policy, please send us a message via our `}<Text style={GlobalStyle.link} onPress={_onContactUs}>Contact Us form.</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrivacyPolicy;