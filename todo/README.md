

# The router

```
switch (route.name) {
case 'taskform':
    return (
        <TaskForm
            nav={nav}
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}
            route={route}
        />
    );
default:
    return (
        <TaskList
            nav={nav}
            onAddStarted={this.onAddStarted.bind(this)}
            onTodoDone={this.handleTodoDone.bind(this)}
            route={route}
            selectedState={this.state.selectedState}
            todos={this.state.todos}
        />
    );
}
```        


# TaskList

- ListView

```
<View >
	<ListView
		dataSource={this.state.dataSource}
		key={this.props.todos}
		renderRow={this.renderRow.bind(this)}
	/>
	<TouchableHighlight onPress={this.addPressed.bind(this)}>
		<Text>
			Add one
		</Text>
	</TouchableHighlight>
</View>
```


# TaskRow

## TaskRow for ios

```
<View>
	<Swipeout>
		<View style={{
			borderColor: '#E7E7E7',
			borderWidth: 1,
			backgroundColor: '#fff',
			padding: 20,
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
		}}
		>
			<Text style={{
				fontSize: 20,
				fontWeight: '600',
			}}
			>
				{this.props.todo.task}
			</Text>
		</View>
	</Swipeout>
</View>
```

## TaskRow for android

```
<Animated.View style={{
	borderColor: '#E7E7E7',
	borderWidth: 1,
	backgroundColor: '#fff',
	padding: 20,
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginBottom: 20,
	marginLeft: 20,
	marginRight: 20,
	translateX: doneAnimation.interpolate({
		inputRange: [0, 0.1, 1],
		outputRange: [0, -100, -1200],  // 0 : 150, 0.5 : 75, 1 : 0
	}),
}}
>

	<Text style={{
		fontSize: 20,
		fontWeight: '600',
	}}
	>
		{this.props.todo.task}
	</Text>


	<TouchableHighlight
		onPress={decoratedPress.bind(this)}
		style={{
			borderRadius: 5,
			padding: 5,
		}}
		underlayColor="#ddd"
	>
		<Image
			source={require('../images/done.png')}
			style={{
				marginTop: 0,
			}}
		/>
	</TouchableHighlight>
</Animated.View>
```

# TaskForm 

```
<View
	style={{
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 150,
		backgroundColor: '#F7F7F7',
	}}
>
	<TextInput
		onChangeText={(todo) => this.todo = todo}
		placeholder="Enter task"
		style={{
			height: 50,
			borderWidth: 1,
			marginLeft: 10,
			marginRight: 10,
			padding: 15,
			borderRadius: 3,
			borderColor: '#D7D7D7',
		}}
	/>

	<TouchableHighlight
		onPress={this.addPressed.bind(this)}
		style={styles.button}
	>

		<Text style={styles.buttonText}>
			Add one
		</Text>

	</TouchableHighlight>

	<TouchableHighlight
		onPress={this.cancelPressed.bind(this)}
		style={[styles.button, styles.cancelButton]}
	>
		<Text style={styles.buttonText}>
			Cancel
		</Text>

	</TouchableHighlight>
</View>
```


