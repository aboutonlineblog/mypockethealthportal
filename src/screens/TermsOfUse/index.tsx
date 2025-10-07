import React from "react";
import {View, Text, ScrollView} from "react-native";
import {APP_TITLE, COMPANY_NAME} from "@/config/app";
import {useStyles} from "./index.styles";
import {AppServiceProps} from "./interfaces";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTermsOfService} from "./hooks";

const TermsOfUse = () => {
    const Styles = useStyles();
    const {_onGoToPrivacyPolicy, _onContactUs} = useTermsOfService();
    const AppService: Array<AppServiceProps> = [
        {id: "fasting_tracker", label: "A fasting tracker"},
        {id: "walking_tracker", label: "A walking tracker"},
        {id: "meal_planner", label: "A diet meal planner"},
        {id: "exercise_planner", label: "An exercise planner"},
    ];
    const Agreements: Array<AppServiceProps> = [
        {id: "information", label: "Provide accurate, current, and complete information during registration"},
        {id: "confidential", label: "Keep your login credentials secure and confidential"},
        {id: "unauthorized", label: "Notify us immediately of any unauthorized use of your account"},
    ];
    const Disclaimer: Array<AppServiceProps> = [
        {id: "healthcare_advice", label: "It does not provide medical or healthcare advice."},
        {id: "fasting_routine", label: "Always consult a qualified healthcare provider before making changes to your diet, exercise, or fasting routine."},
        {id: "medical_advice", label: "Do not ignore professional medical advice because of information provided in this App."},
    ];
    const Restrictions: Array<AppServiceProps> = [
        {id: "information", label: "Use the App for unlawful purposes"},
        {id: "permission", label: "Modify, copy, or distribute the App without permission"},
        {id: "source_code", label: "Reverse engineer or attempt to extract the App’s source code"},
        {id: "harm", label: "Use the App in a way that could harm, disable, or interfere with other users"},
    ];

    return (
        <SafeAreaView style={Styles.container} edges={['bottom']}>
            <ScrollView style={Styles.scrollView}>
                <Text style={Styles.lastUpdateLabel}>Last updated: October 7, 2025</Text>
                
                <Text style={Styles.intro}>{`Welcome to ${APP_TITLE} (“the App”), operated by ${COMPANY_NAME} (“we,” “our,” or “us”).

By downloading, accessing, or using the App, you agree to be bound by these Terms of Service (“Terms”). Please read them carefully before using the App.

If you do not agree to these Terms, do not use the App.`}</Text>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Overview</Text>
                        {`\n\n${APP_TITLE} is a mobile application designed to help users manage and monitor their health goals. The App provides tools such as:\n`}
                    </Text>

                    <View style={Styles.bulletContainer}>
                        {
                            AppService.map((as: AppServiceProps) => (
                                <View key={as.id} style={Styles.bullets}>
                                    <View style={Styles.bullet} />
                                    <Text style={Styles.normalSize}>{as.label}</Text>
                                </View>
                            ))
                        }
                    </View>

                    <Text style={Styles.section}>
                        The App is intended for general wellness and lifestyle purposes only. It is <Text style={Styles.highlight}>
                            not a substitute for professional medical advice, diagnosis, or treatment.
                        </Text>
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Eligibility</Text>
                        {`\n\nYou must be at least 13 years old (or the minimum age in your country that allows you to consent to data processing) to use this App.

By using the App, you confirm that you meet this age requirement and agree to comply with all applicable laws and regulations.`}
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>User Accounts</Text>
                        {`\n\nTo access certain features, you may need to create an account.\nYou agree to:\n`}
                    </Text>

                    <View style={Styles.bulletContainer}>
                        {
                            Agreements.map((as: AppServiceProps) => (
                                <View key={as.id} style={Styles.bullets}>
                                    <View style={Styles.bullet} />
                                    <Text style={Styles.normalSize}>{as.label}</Text>
                                </View>
                            ))
                        }
                    </View>

                    <Text style={Styles.section}>
                        We reserve the right to suspend or terminate your account if we believe that you have violated these Terms.
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Health Disclaimer</Text>
                        {`\n\nThe App and its content are provided for `}
                        <Text style={Styles.highlight}>
                            {`informational and motivational purposes only.\n`}
                        </Text>
                    </Text>

                    <View style={Styles.bulletContainer}>
                        {
                            Disclaimer.map((as: AppServiceProps) => (
                                <View key={as.id} style={Styles.bullets}>
                                    <View style={Styles.bullet} />
                                    <Text style={Styles.normalSize}>{as.label}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>App Usage and Restrictions</Text>
                        {`\n\nYou agree not to:\n`}
                    </Text>

                    <View style={Styles.bulletContainer}>
                        {
                            Restrictions.map((as: AppServiceProps) => (
                                <View key={as.id} style={Styles.bullets}>
                                    <View style={Styles.bullet} />
                                    <Text style={Styles.normalSize}>{as.label}</Text>
                                </View>
                            ))
                        }
                    </View>

                    <Text style={Styles.section}>
                        We may update, modify, or discontinue parts of the App at any time without notice.
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Privacy</Text>
                        {`\n\nYour privacy is important to us.`}
                    </Text>

                    <Text style={Styles.section}>
                        Please review our <Text style={Styles.link} onPress={_onGoToPrivacyPolicy}>Privacy Policy</Text> to understand how we collect, use, and protect your personal information.
                    </Text>
                </View>

                {/* <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Subscription and Fees</Text>
                        {`\n\nSome features may be available only through a paid subscription.

If you subscribe, you agree to pay all applicable fees and taxes according to your selected plan.

Subscription terms, renewal, and cancellation details will be clearly presented in the App.`}
                    </Text>
                </View> */}

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Intellectual Property</Text>
                        {`\n\nAll content, design, features, and functionality of the App—including logos, graphics, and text—are owned by ${COMPANY_NAME} and are protected by copyright, trademark, and other laws.
                        
You may not use our intellectual property without our written consent.`}
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Limitation of Liability</Text>
                        {`\n\nTo the fullest extent permitted by law, `}<Text style={Styles.highlight}>we are not liable</Text> for any direct, indirect, incidental, or consequential damages arising from your use or inability to use the App.{`\n\n`}Use of the App is at your own risk.
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Termination</Text>
                        {`\n\nWe may suspend or terminate your access to the App at any time, without notice, if you violate these Terms or misuse the App.`}
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Changes to These Terms</Text>
                        {`\n\nWe may update these Terms from time to time.\n\nWhen we make changes, we’ll post the revised version with an updated “Last updated” date.\n\nContinued use of the App after changes means you accept the new Terms.`}
                    </Text>
                </View>

                <View style={Styles.sectionContainer}>
                    <Text style={Styles.section}>
                        <Text style={Styles.title}>Contact Us</Text>
                        {`\n\nIf you have questions or concerns about these Terms, `}<Text style={Styles.link} onPress={_onContactUs}>please send us a message</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TermsOfUse;