import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import TextView from "../components/TextView";
import Divider from "../components/Divider";
import colors from "../config/colors";

const BusinessAccountSettings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextView style={styles.bold}>
          Your are currently using a personal account
        </TextView>
        <TextView style={[styles.center, styles.m]}>
          Upgrade to business account to unlock business features
        </TextView>
        <TouchableWithoutFeedback>
          <View style={styles.m}>
            <TextView style={styles.textPrimary}>UPGRADE</TextView>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* End of the upper card */}
      {/* starting ListView */}
      <View style={styles.listView}>
        {/* Flag Card */}
        <View style={styles.flagCard}>
          <TextView style={styles.countryText}>Country</TextView>
          <Divider style={styles.flagSeparator} />
          <View style={styles.flagContainer}>
            <View style={styles.flagWrapper}>
              <Image
                style={styles.flagLogo}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/cameroo%20flag.png?alt=media&token=a53adf33-e58e-4d85-878f-a37b0df48c6b",
                }}
              />
              <TextView>Cameroon</TextView>
            </View>

            <TouchableWithoutFeedback>
              <View style={styles.m}>
                <TextView style={styles.textPrimary}>CHANGE</TextView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        {/* End of Flag Card */}
        <Divider style={styles.divider} />
        {/* Account type card */}
        <View style={styles.accountCard}>
          <View style={styles.mb}>
            <TextView style={styles.countryText}>Account type</TextView>
          </View>
          <View style={styles.mb}>
            <TextView style={styles.textGrey}>Personal account</TextView>
          </View>
        </View>
        {/* End  of Account type Card*/}
        <Divider style={styles.divider} />
        {/* Payment Settings Card*/}
        <View style={styles.paymentCard}>
          <View style={styles.mb}>
            <TextView style={styles.countryText}>Payment Settings</TextView>
          </View>
          <View style={styles.mb}>
            <TextView style={styles.textGrey}>
              These are the most important settings
            </TextView>
          </View>
          <View style={styles.marginSettings}>
            <TextView style={[styles.textPrimary, styles.settingText]}>
              Manage Payment Options
            </TextView>
          </View>
        </View>
        {/* End Payment Settings Card */}
        <Divider style={styles.divider} />
        {/* Security settings */}
        <View style={styles.accountCard}>
          <View style={styles.mb}>
            <TextView style={styles.countryText}>Security settings</TextView>
          </View>
          <View style={styles.mb}>
            <TextView style={styles.textGrey}>
              These are the most important settings
            </TextView>
          </View>
        </View>
        {/* End Security settings */}
        <Divider style={styles.flagSeparator} />
        {/* Lock Container */}
        <View style={styles.pinCodeContainer}>
          <View style={styles.pinCodeWrapper}>
            <Image
              style={styles.flagLogo}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/lock.png?alt=media&token=3f5d36dd-1897-469a-b31f-6d1bd6f305eb",
              }}
            />
            <View style={styles.ml}>
              <TextView>PIN Code</TextView>
            </View>
          </View>
          <Image
            style={styles.flagLogo}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/right.png?alt=media&token=929666af-f577-4e2b-8315-ff4bfb7a3e86",
            }}
          />
        </View>
          {/* End of Lock Container */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1 / 6,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  center: {
    textAlign: "center",
    color: colors.grey,
  },
  bold: {
    fontWeight: "bold",
  },
  textPrimary: {
    color: colors.default,
  },
  textGrey: {
    color: colors.grey,
  },
  m: {
    margin: 10,
  },
  listView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flagCard: {
    flex: 1 / 8,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  flagContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flagWrapper: {
    flex: 1 / 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flagLogo: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  countryText: {
    fontWeight: '600',
    color: colors.dark,
    fontSize: 18,
  },
  flagSeparator: {
    height: 10,
  },
  divider: {
    height: 1,
    marginHorizontal: 30,
    backgroundColor: colors.divider,
    marginVertical: 10,
  },
  accountCard: {
    flex: 1 / 10,
    marginHorizontal: 30,
    marginVertical: 5,
    marginBottom: 20,
  },
  mb: {
    marginBottom: 10,
  },
  paymentCard: {
    flex: 1 / 4,
    marginHorizontal: 30,
    marginVertical: 5,
    marginBottom: 20,
  },
  marginSettings: {
    marginVertical: 10,
  },
  settingText: {
    fontSize: 18,
  },
  pinCodeContainer: {
    flex: 1 / 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 15,
  },
  pinCodeWrapper: {
    flex: 1 / 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ml: {
    marginLeft: 5,
  },
});

export default BusinessAccountSettings;
