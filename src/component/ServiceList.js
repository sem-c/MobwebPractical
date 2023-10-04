import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

const ServiceList = (props) => {
	const { data, isForAdditional } = props;

	const renderCard = ({ item }) => {
		return (
			<View>
				<Text style={styles.serviceTitle}>{`${item?.name} :`}</Text>
				{item.purchased_office_template.purchased_office_services.map((e) => {
					return (
						(isForAdditional ? !e.service_selected : e.service_selected) &&
						<View key={e.id} style={styles.contentView}>
							<Image style={styles.image} source={{ uri: e?.image }} />
							<View style={styles.nameView}>
								<Text>{e?.name}</Text>
								<Text style={styles.price}>{`Kr ${isForAdditional ? e.price : e.service_selected?.price},-`}</Text>
							</View>
						</View>
					);
				})}
			</View>
		);
	};

	const renderPriceList = ({ item }) => {
		return (
			<View style={styles.priceList}>
				{item.purchased_office_template.purchased_office_services.map((e) => {
					return (
						e.service_selected &&
						<>
							<Text style={styles.subService}>{e.name}</Text>
							<Text style={styles.subService}>{`Kr ${e.service_selected?.price},-`}</Text>
						</>
					)
				})}
			</View>
		);
	};

	return (
		<>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={renderCard}
				contentContainerStyle={styles.listContainer}
				ItemSeparatorComponent={() => (
					<View style={styles.separator} />
				)}
			/>
			{!isForAdditional &&
				<FlatList
					data={data}
					bounces={false}
					keyExtractor={item => item.id}
					renderItem={renderPriceList}
					contentContainerStyle={styles.container}
					ItemSeparatorComponent={() => (
						<View style={{ marginTop: 12 }} />
					)}
					ListFooterComponentStyle={styles.listFooter}
					ListFooterComponent={() => {
						return <View style={[styles.priceList, { marginTop: 20 }]}>
							<Text style={[styles.subService, { color: colors.yellow }]}>Total Costings</Text>
							<Text style={[styles.subService, { color: colors.yellow }]}>{data.reduce((prev, curr) => {
								return (prev +
									curr.purchased_office_template.purchased_office_services.reduce((prev2, curr2) => {
										return curr2.service_selected ? prev2 + parseInt(curr2.service_selected.price) : prev2;
									}, 0));
							}, 0)}</Text>
						</View>
					}}
				/>
			}
		</>
	)
};

const styles = StyleSheet.create({
	listContainer: {
		marginHorizontal: 20,
		paddingVertical: 20
	},
	separator: { height: 20 },
	serviceTitle: {
		fontSize: 16,
		fontWeight: '500'
	},
	contentView: {
		borderWidth: 1,
		borderColor: colors.grey_C1C9D3,
		borderRadius: 7,
		padding: 10,
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 10
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 7,
	},
	nameView: {
		marginLeft: 15
	},
	price: {
		marginTop: 5
	},
	subService: {
		color: colors.white,
		fontSize: 16,
		fontWeight: '500'
	},
	priceList: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	container: {
		height: 280,
		backgroundColor: colors.black,
		paddingHorizontal: 20,
		padding: 15
	},
	listFooter: {
		borderTopWidth: 1,
		marginVertical: 20,
		borderColor: colors.yellow
	}
})

export default ServiceList;