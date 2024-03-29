import * as React from 'react';
import loadable from '@loadable/component';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getPhotoModule } from '@/client/redux/module/photo-module';
import PhotoGallery from '../../gallery/photo-gallery';
import { MapDispatchToProps, connect } from 'react-redux';
import { photoReset } from '@/client/redux/action/photo-action';
import Dashboard from '../../dashboard/dashboard';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slideToShow: 1,
	slidesToScroll: 1
}

type OwnProps = {}

type DispatchProps = {
	resetPhotos(): void;
}

type Props = OwnProps & DispatchProps;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = dispatch => ({
	resetPhotos: () => dispatch(photoReset())
});

const Home = connect(null, mapDispatchToProps)(class extends React.Component<Props> {

	componentWillMount() {
		this.props.resetPhotos();
	}

	render() {
		return <Dashboard />;
	}
})

export default Home;