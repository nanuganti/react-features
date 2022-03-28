//You can add/edit props passed to the component using props proxy pattern like this:
function HOC(WrappedComponent) {
    return class Test extends Component {
        render() {
            const newProps = {
                title: 'New Header',
                footer: false,
                showFeatureX: false,
                showFeatureY: true
            }

            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}