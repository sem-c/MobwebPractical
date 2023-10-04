import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import ServiceList from '../component/ServiceList';
import styles from './styles';
import { Images } from '../constants/Images';

const Service = () => {
	const [isPurchasedSelected, setIsPurchasedSelected] = useState(true);
	const [purchasedService, setPurchasedService] = useState([]);
	const [additionalService, setAdditionalService] = useState([]);

	useEffect(() => {
		apiData();
	}, []);

	const apiData = async () => {
		const result = await axios.get('https://fir-dynamiclinks-e43dd.web.app/practical-api.json');
		let final = JSON.parse(result.request.response)

		let purchased = [];
		let additional = [];
		final.data.purchased_services.map((item) => {
			item?.purchased_office_template?.purchased_office_services.map((e) => {
				if (e.service_selected) {
					purchased.push(item);
					setPurchasedService(purchased);
				} else if (e.service_selected === null) {
					if (!additional.some((x) => x.id === item.id)) {
						additional.push(item);
						setAdditionalService(additional);
					}
				}
			})
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.settingIcon} source={Images.setting} />
				<Text style={styles.serviceText}>{'Services'}</Text>
			</View>
			<View style={styles.tabContainer}>
				<TouchableOpacity
					onPress={() => setIsPurchasedSelected(true)}
					style={[styles.tab, isPurchasedSelected && styles.selectedTab]}>
					<Text style={[styles.tabTitle, isPurchasedSelected && styles.selectedTitle]}>{'PURCHASED SERVICES'}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setIsPurchasedSelected(false)}
					style={[styles.tab, !isPurchasedSelected && styles.selectedTab]}>
					<Text style={[styles.tabTitle, !isPurchasedSelected && styles.selectedTitle]}>{'ADDITIONAL SERVICES'}</Text>
				</TouchableOpacity>
			</View>

			{isPurchasedSelected &&
				<ServiceList
					data={purchasedService}
				/>
			}

			{!isPurchasedSelected &&
				<ServiceList
					isForAdditional={true}
					data={additionalService}
				/>
			}
		</View>
	);
};

export default Service;