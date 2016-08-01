import './Slick.scss';
import React, { Component, PropTypes } from 'react';
const itemData = [
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  },
  {
    name: '笔',
    tags: '你好,呵呵',
    code: 61442,
  }];


export default class Slick extends Component {
  static defaultProps = {
    directionNav: true,
    defaultTranslateX: 0,
    iconItemListPos: {
      transform: 'translateX(0)',
    },
    leftStep: 84 * 6,
  }
  static propTypes = {
    defaultCurrent: PropTypes.number,
    defaultTranslateX: PropTypes.number,
    directionNav: PropTypes.bool,
    onSelect: PropTypes.func,
    iconItemListPos: PropTypes.object,
    leftStep: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.state = {
      currentItem: this.props.defaultCurrent,
      defaultTranslateX: this.props.defaultTranslateX,
      iconItemListPos: Object.assign({}, this.props.iconItemListPos),
    };
  }
  handleClick(config, evt) {
    const { type, index } = config;
    let _currentItem = this.state.currentItem;
    let _iconItemListPosLeft = this.state.defaultTranslateX;
    console.log('============');
    console.log(_iconItemListPosLeft);
    switch (type) {
      case 'item':
        _currentItem = index;
        break;
      case 'prev':
        // if (this.state.currentItem > 1) {
        //   _currentItem = this.state.currentItem - 1;
        // }
        console.log('上一页');
        _iconItemListPosLeft += this.props.leftStep;
        this.setState({ defaultTranslateX: _iconItemListPosLeft });
        console.log(_iconItemListPosLeft);
        this.setState({ iconItemListPos: {
          transform: `translateX(${_iconItemListPosLeft}px)`,
        } });
        break;
      case 'next':
        // if (this.state.currentPage < this.props.totalPage) {
        //   _currentPage = this.state.currentPage + 1;
        // }
        evt.preventDefault();
        console.log('下一页');
        _iconItemListPosLeft -= this.props.leftStep;
        console.log(_iconItemListPosLeft);
        this.setState({ defaultTranslateX: _iconItemListPosLeft });
        this.setState({ iconItemListPos: {
          transform: `translateX(${_iconItemListPosLeft}px)`,
        } });
        break;
      default:
        break;
    }

    if (_currentItem !== this.state.currentItem) {
      this.setState({
        currentItem: _currentItem,
      });
    }

    evt.stopPropagation();
    evt.preventDefault();

  //  if (this.props.onClick) this.props.onClick(_currentPage);
  }
  deleteSingleClick(config, evt) {
    const { index } = config;
    console.log(index);
    console.log(evt);
    alert('delete');
  }
  render() {
    const itemArr = [];
    const { currentItem, iconItemListPos } = this.state;
    itemData.forEach((item, i) => {
      itemArr.push(<li
        key={`item_${i}`}
        className={currentItem === i ? 'upload-icon-item on' : 'upload-icon-item'}
        onClick={(evt) => this.handleClick({ type: 'item', index: i }, evt)}
      >
        <i
          className={'iconfont delete'}
          onClick={(evt) => this.deleteSingleClick({ index: i }, evt)}
        >&#xf077;</i>
        <i className={'iconfont upload-icon'}>&#xf50f;</i>
        {/* &#xf50f; {`&#${item.code};`} */}
      </li>);
    });
    return (
      <div className={'upload-icon clearfix'}>
        <button
          className={'icons-more-btn icons-more-btn-left'}
          onClick={(evt) => this.handleClick({ type: 'prev' }, evt)}
        >
          <i className={'iconfont icons-more-btn-icon'}>&#xf1c3;</i></button>
        <div className={'upload-icon-list-area'}>
          <ul ref={'uploadIconList'} className={'upload-icon-list'} style={iconItemListPos}>
            {itemArr}
          </ul>
        </div>
        <button
          className={'icons-more-btn icons-more-btn-right'}
          onClick={(evt) => this.handleClick({ type: 'next' }, evt)}
        >
          <i className={'iconfont icons-more-btn-icon'}>&#xf1c1;</i></button>
      </div>
    );
  }
}
